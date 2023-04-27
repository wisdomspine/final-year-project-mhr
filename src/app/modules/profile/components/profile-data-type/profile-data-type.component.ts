import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileRecordStatus } from '../../components';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, switchMap } from 'rxjs';
import { selectSegementRecords } from '@core/store/profile';

@Component({
  selector: 'mhr-profile-data-type',
  templateUrl: './profile-data-type.component.html',
  styleUrls: ['./profile-data-type.component.scss'],
})
export class ProfileDataTypeComponent {
  readonly router = inject(Router);
  readonly activatedRoute = inject(ActivatedRoute);
  readonly store = inject(Store);
  readonly records = this.activatedRoute.paramMap.pipe(
    map((map) => map.get('type')),
    filter((type) => type != null),
    switchMap((code) =>
      this.store.select(selectSegementRecords(code as string))
    ),
    map((records) =>
      records?.map((record) => ({
        time: record.time,
        status: record.status,
        address: record.assetId,
      }))
    )
  );

  addRecord() {
    this.router.navigate(['add-record'], {
      relativeTo: this.activatedRoute,
    });
  }
}
