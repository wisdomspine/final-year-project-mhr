import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthAction = createActionGroup({
  source: '[AuthAction]',
  events: {
    connect: emptyProps(),
    disconnect: emptyProps(),
    connected: props<{ address: string | null }>(),
    disconnected: emptyProps(),
    error: props<{ message: string | null }>(),
  },
});
