import { Component, OnDestroy, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckComponentDeactivation } from '@app/core/guards';
import { selectSegment, selectSegmentsCode } from '@app/core/store/hl7-data';
import { RecordFields } from '@mhr/components';
import { Store } from '@ngrx/store';
import {
  Subject,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'mhr-new-profile-record',
  templateUrl: './new-profile-record.component.html',
  styleUrls: ['./new-profile-record.component.scss'],
})
export class NewProfileRecordComponent
  implements CheckComponentDeactivation, OnDestroy
{
  readonly store = inject(Store);
  readonly activatedRoute = inject(ActivatedRoute);
  records: RecordFields = {};

  form = new FormGroup<{ [key: string]: FormControl }>({});
  private readonly destroy$ = new Subject<void>();
  readonly formGenerator = this.activatedRoute.parent?.paramMap
    .pipe(
      map((params) => params.get('type')),
      filter((type) => type != null),
      distinctUntilChanged(),
      switchMap((type) => this.store.select(selectSegment(type as string)))
    )
    .pipe(
      map((segment) =>
        segment.fields.reduce((prev, cur) => {
          prev[cur.field] = {
            label: `${cur.description}(${cur.field})`,
            placeholder: cur.description,
            type: 'text',
          };
          return prev;
        }, {} as any)
      ),
      takeUntil(this.destroy$)
    )
    .subscribe((records) => {
      const controls: { [key: string]: FormControl } = {};

      for (const key in records) {
        controls[key] = new FormControl();
      }
      this.records = records;
      this.form = new FormGroup(controls);
    });

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  canDeactivate() {
    return !(this.form.dirty || this.form.touched);
  }
}
