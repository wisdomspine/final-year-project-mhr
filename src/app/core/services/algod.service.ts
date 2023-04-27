import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import algosdk from 'algosdk';

@Injectable({
  providedIn: 'root',
})
export class AlgodService {
  readonly algodClient = new algosdk.Algodv2(
    environment.algoSdk.token,
    environment.algoSdk.algodServer,
    environment.algoSdk.algodPort
  );
  readonly indexerClient = new algosdk.Indexer(
    {
      'X-API-key': environment.algoSdk.indexerKey,
    },
    environment.algoSdk.indexerServer,
    environment.algoSdk.indexerPort
  );
  readonly kmdClient = new algosdk.Kmd(
    environment.algoSdk.token,
    environment.algoSdk.kmdServer,
    environment.algoSdk.kmdPort
  );
}
