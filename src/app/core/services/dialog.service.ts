import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MessageDialogConfig,
  MhrMessageDialogComponent,
  MessageDialogAction,
} from '@mhr/components';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private readonly dialog = inject(MatDialog);
  show(
    data: MessageDialogConfig,
    options?: {
      disableClose?: boolean;
    }
  ) {
    return this.dialog.open<
      MhrMessageDialogComponent,
      MessageDialogConfig,
      MessageDialogAction
    >(MhrMessageDialogComponent, {
      data,
      width: 'min(80vw, 440px)',
      disableClose: options?.disableClose ?? true,
    });
  }
}
