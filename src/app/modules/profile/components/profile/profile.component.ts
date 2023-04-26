import { Component, OnDestroy, inject } from '@angular/core';
import { selectProfileSegments } from '@app/core/store/hl7-data';
import { Store } from '@ngrx/store';
import { Subject, map } from 'rxjs';

@Component({
  selector: 'mhr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  readonly store = inject(Store);
  readonly records = this.store.select(selectProfileSegments).pipe(
    map((segments) => Object.values(segments)),
    map((segments) =>
      segments.map((segment) => ({
        name: segment.title,
        id: segment.segment,
        description: segment.description,
      }))
    )
  );
}
