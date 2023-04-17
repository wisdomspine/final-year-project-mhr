import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { DialogService } from '@core/services';
import { MessageDialogAction } from '@mhr/components';
import { map } from 'rxjs';

export interface CheckComponentDeactivation {
  canDeactivate: () => boolean;
}

export interface ConfirmComponentDeactivationData {
  title?: string;
  text?: string;
  primary?: string;
  secondary?: string;
  closeAction?: MessageDialogAction;
}

export const defaultConfirmComponentDeactivationData: ConfirmComponentDeactivationData =
  {
    text: "You're about to leave this page, all changes will be discard",
    title: 'Confirm Navigation',
    primary: 'Stay',
    secondary: 'Leave',
    closeAction: 'secondary',
  };

export const confirmComponentDeactivationDataKey =
  'confirmRouteDeactivationGuard';

export const confirmRouteDeactivationGuard: CanDeactivateFn<
  CheckComponentDeactivation
> = (component, activatedRouteSnapshot) => {
  const confirmed = component.canDeactivate();

  // no need to confirm
  if (confirmed) return true;

  // else confirm the deactivation
  const data: ConfirmComponentDeactivationData = {
    ...defaultConfirmComponentDeactivationData,
    ...activatedRouteSnapshot.data[confirmComponentDeactivationDataKey],
  };

  return inject(DialogService)
    .show(
      {
        ...data,
        text: data.text ?? '',
        primary: data.primary ?? '',
      },
      { disableClose: true }
    )
    .afterClosed()
    .pipe(map((action) => action === data.closeAction));
};
