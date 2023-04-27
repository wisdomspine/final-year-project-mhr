import { Component, OnDestroy, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckComponentDeactivation } from '@app/core/guards';
import { DialogService } from '@app/core/services';
import { selectSegment } from '@app/core/store/hl7-data';
import { ProfileAction } from '@core/store/profile';
import { RecordFields } from '@mhr/components';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  Subject,
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
  readonly dialogService = inject(DialogService);
  readonly actions = inject(Actions);
  readonly router = inject(Router);
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

  readonly goBack = this.actions
    .pipe(ofType(ProfileAction.recordAdded), takeUntil(this.destroy$))
    .subscribe(({ id }) => {
      console.log(id);
      this.router.navigateByUrl(`../${id}`);
    });

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  canDeactivate() {
    return !(this.form.dirty || this.form.touched);
  }

  submit() {
    const controls = Object.values(this.form.value).map((val) =>
      val == null ? '' : val
    );
    if (controls.length < 1) return;
    this.store.dispatch(
      ProfileAction.addRecord({
        segmentCode: this.activatedRoute.snapshot?.parent?.paramMap.get(
          'type'
        ) as string,
        fieldValues: controls,
      })
    );
  }
}
