import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockConnections } from '@mhr/components';
import { MatDialog } from '@angular/material/dialog';
import { RequestConnectionDialogComponent } from '../../components';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mhr-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent implements OnDestroy {
  readonly destroy$: Subject<void> = new Subject();
  readonly router = inject(Router);
  empty: boolean = false;
  readonly dialog = inject(MatDialog);
  readonly activatedRoute = inject(ActivatedRoute);
  readonly querySubscription = this.activatedRoute.queryParams
    .pipe(takeUntil(this.destroy$))
    .subscribe((query) => {
      if (query['request-connection']) {
        this.requestConnection();
      }
    });
  readonly connections = MockConnections;
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

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
  requestConnection() {
    this.dialog.open(RequestConnectionDialogComponent, {
      width: 'min(540px, 80vw)',
      disableClose: true,
    });
  }
}
