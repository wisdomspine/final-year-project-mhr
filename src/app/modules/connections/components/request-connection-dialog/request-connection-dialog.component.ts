import { Component, inject } from '@angular/core';
import { requestConnectionForm } from '../../forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mhr-request-connection-dialog',
  templateUrl: './request-connection-dialog.component.html',
  styleUrls: ['./request-connection-dialog.component.scss'],
})
export class RequestConnectionDialogComponent {
  form = requestConnectionForm();
  readonly minutes = [0, 5, 10, 15, 25, 30, 45, 59];
  readonly activatedRoute = inject(ActivatedRoute);

  constructor() {
    const addr =
      this.activatedRoute.snapshot.queryParams['request-connection-address'];
    if (addr) {
      this.form.patchValue({ address: addr });
    }
  }
}
