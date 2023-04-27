import {
  ProfileRecord,
  ProfileState,
} from '@app/core/store/profile/profile.state';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ProfileAction = createActionGroup({
  source: '[ProfileAction]',
  events: {
    'add record': props<{ segmentCode: string; fieldValues: string[] }>(),
    'record added': props<{ id: string }>(),
    error: props<{ error: string }>(),
    'update record': props<ProfileState['records']>(),
  },
});
