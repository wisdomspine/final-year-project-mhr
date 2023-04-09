import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-connected',
  templateUrl: './not-connected.component.html',
  styleUrls: ['./not-connected.component.scss'],
})
export class NotConnectedComponent {
  readonly router = inject(Router);
  connect() {
    this.router.navigateByUrl('/connections');
  }
}
