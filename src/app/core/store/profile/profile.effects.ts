import { inject } from '@angular/core';
import { ProfileAction, ProfileRecord } from '@core/store/profile';
import { arrayToSegment } from '@core/utils';
import {
  AlgodService,
  DialogService,
  IpfsService,
  WalletConnectService,
} from '@core/services';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  switchMap,
  map,
  catchError,
  of,
  withLatestFrom,
  from,
  filter,
  tap,
  zip,
  combineLatest,
  startWith,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAddress } from '@core/store/auth';
import algosdk from 'algosdk';
import { environment } from '@env/environment.development';
import { formatJsonRpcRequest } from '@json-rpc-tools/utils';
import {
  Firestore,
  addDoc,
  collection,
  Timestamp,
  updateDoc,
  getDocs,
  docSnapshots,
  collectionData,
  collectionChanges,
  collectionSnapshots,
} from '@angular/fire/firestore';
import { selectProfileSegments } from '@app/core/store/hl7-data';
import { segmentToArray } from '@app/core/utils/segment-to-array';

export const addProfileRecordEffect = createEffect(
  (
    action$ = inject(Actions),
    walletConnectService = inject(WalletConnectService),
    algodService = inject(AlgodService),
    ipfsService = inject(IpfsService),
    store = inject(Store),
    dialogService = inject(DialogService),
    firestore = inject(Firestore)
  ) => {
    let ref: ReturnType<DialogService['show']> | null;

    return action$.pipe(
      ofType(ProfileAction.addRecord),
      switchMap(({ segmentCode, fieldValues }) => {
        ref?.close();
        ref = null;
        ref = dialogService.show({ text: 'Uploading to IPFS' });
        return ipfsService
          .add(arrayToSegment(segmentCode, fieldValues))
          .pipe(map((path) => ipfsService.fullURL(path)))
          .pipe(
            withLatestFrom(
              store
                .select(selectAddress)
                .pipe(filter((address) => address != null)),
              from(algodService.algodClient.getTransactionParams().do())
            ),
            switchMap(([url, address, suggestedParams]) => {
              ref?.close();
              ref = null;
              ref = dialogService.show({
                text: 'Please, sign this transaction from your wallet',
              });
              const txn =
                algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
                  from: address as string,
                  suggestedParams,
                  defaultFrozen: false,
                  unitName: environment.unitName,
                  assetName: `${environment.txnPrefix}${segmentCode}`,
                  manager: address as string,
                  reserve: address as string,
                  freeze: address as string,
                  clawback: address as string,
                  assetURL: url,
                  total: 1,
                  decimals: 0,
                });
              const txns = [txn];
              const txnsToSign = txns.map((txn) => {
                const encodedTxn = Buffer.from(
                  algosdk.encodeUnsignedTransaction(txn)
                ).toString('base64');
                return {
                  txn: encodedTxn,
                  message:
                    'Please sign this transaction using your Pera wallet to proceed.',
                };
              });
              const requestParams = [txnsToSign];
              const request = formatJsonRpcRequest(
                'algo_signTxn',
                requestParams
              );
              return from(
                walletConnectService.connector.sendCustomRequest(request)
              ).pipe(
                switchMap((signedTxns: Array<string | null>) => {
                  ref?.close();
                  ref = null;
                  ref = dialogService.show({
                    text: 'Your transaction is being recorded on the chain',
                  });
                  let signedTxn = signedTxns[0];
                  if (signedTxn == null)
                    return of(
                      ProfileAction.error({ error: 'Record not signed' })
                    );
                  // return from(
                  //   algodService.algodClient
                  //     .sendRawTransaction(
                  //       new Uint8Array(Buffer.from(signedTxn, 'base64'))
                  //     )
                  //     .do()
                  // ).
                  return from(
                    addDoc(
                      collection(
                        firestore,
                        `profiles/${address}/${segmentCode}`
                      ),
                      {
                        url,
                        status: 'pending',
                        time: Timestamp.now(),
                      }
                    )
                  ).pipe(
                    map((txn) => {
                      ref?.close();
                      ref = null;
                      dialogService.show({
                        text: 'Record added successfuly',
                        primary: 'Dismiss',
                      });
                      // randomly change the status
                      setTimeout(() => {
                        updateDoc(txn, { status: 'signed' }).then();
                      }, Math.floor(Math.random() * 20_000));
                      return ProfileAction.recordAdded({ id: txn.id });
                    })
                  );
                })
              );
            })
          )
          .pipe(
            catchError((error: Error) => {
              console.error(error);
              ref?.close();
              ref = null;
              dialogService.show({
                title: 'Error adding record',
                text: error?.message,
                primary: 'Dismiss',
              });
              return of(ProfileAction.error({ error: error.message }));
            }),
            tap((_) => {
              ref?.close();
              ref = null;
            })
          );
      })
    );
  },
  {
    functional: true,
  }
);

export const getProfileData = createEffect(
  (
    store = inject(Store),
    firestore = inject(Firestore),
    ipfsService = inject(IpfsService)
  ) => {
    return store
      .select(selectProfileSegments)
      .pipe(
        withLatestFrom(
          store.select(selectAddress).pipe(filter((address) => address != null))
        ),
        switchMap(([segments, address]) => {
          const codes = Object.keys(segments);
          return combineLatest(
            codes.map((code) =>
              collectionSnapshots(
                collection(firestore, `profiles/${address}/${code}`)
              ).pipe(
                switchMap((docs) => {
                  if (docs.length == 0) return of([]);
                  return combineLatest(
                    docs.map((doc) =>
                      ipfsService.get(doc.data()['url']).pipe(
                        map((content) => segmentToArray(content)[1]),
                        map((segmentValues) => {
                          const codeSegment = segments[code];
                          const record: ProfileRecord = {
                            assetId: doc.id,
                            fields: [],
                            status: doc.data()['status'],
                            time: (doc.data()['time'] as Timestamp).toDate(),
                            txnId: doc.id,
                          };

                          for (let i = 0; i < codes.length; ++i) {
                            record.fields.push({
                              metadata: codeSegment.fields[i],
                              value: segmentValues[i],
                            });
                          }

                          return record;
                        })
                      )
                    )
                  );
                })
              )
            )
          ).pipe(
            map((records) => {
              return records.reduce(
                (acc, cur, index) => ({ ...acc, [codes[index]]: cur }),
                {} as { [key: string]: ProfileRecord[] }
              );
            })
          );
        })
      )
      .pipe(map((records) => ProfileAction.updateRecord(records)));
  },
  {
    functional: true,
  }
);
