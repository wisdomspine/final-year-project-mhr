import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { selectTxn } from '@app/core/store/profile';
import { Store } from '@ngrx/store';
import {
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'mhr-profile-record',
  template: `
    <mhr-record-page
      title=" "
      [recordFields]="(recordFields | async) || []"
    ></mhr-record-page>
  `,
})
export class ProfileRecordComponent {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly store = inject(Store);
  readonly recordFields = combineLatest([
    this.activatedRoute.parent!.paramMap.pipe(
      map((params) => params.get('type')),
      filter((type) => type != null),
      distinctUntilChanged()
    ),
    this.activatedRoute.paramMap.pipe(
      map((params) => params.get('address')),
      filter((address) => address != null),
      distinctUntilChanged()
    ),
  ]).pipe(
    switchMap(([code, address]) =>
      this.store.select(selectTxn(code!, address!))
    ),
    map((record) =>
      record?.fields.reduce(
        (acc, curr) => [
          ...acc,
          {
            name: curr.metadata?.description,
            value: curr.value,
          },
        ],
        [
          {
            name: 'Address',
            value: record.assetId,
          },
          {
            name: 'Status',
            value: record.status,
          },
          {
            name: 'Time',
            value: record.time.toLocaleString(),
          },
        ]
      )
    )
  );
}
