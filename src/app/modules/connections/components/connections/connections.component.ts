import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MhrConnectionStatus } from '@mhr/components';

@Component({
  selector: 'mhr-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent {
  readonly router = inject(Router);
  empty: boolean = false;
  readonly connections: {
    name: string;
    status: MhrConnectionStatus;
    time: Date;
  }[] = [
    {
      name: 'John Abdul',
      time: new Date(new Date().setHours(16, 20)),
      status: 'active',
    },
    {
      name: 'x02637883783838822',
      time: new Date(),
      status: 'pending',
    },
    {
      name: 'John Mike',
      time: new Date(new Date().setMonth(5, 12)),
      status: 'completed',
    },
  ];
  get noConnectionSelected(): boolean {
    return (
      !this.empty &&
      this.router.isActive('/connections', {
        fragment: 'ignored',
        matrixParams: 'ignored',
        paths: 'exact',
        queryParams: 'ignored',
      })
    );
  }
}
