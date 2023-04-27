import { ProfileAction } from './profile.actions';
import { ProfileState } from './profile.state';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
const initialState: ProfileState = {
  adding: false,
  error: null,
  records: {},
};
export const profileFeature = createFeature({
  name: 'profile',
  reducer: createReducer(
    initialState,
    on(ProfileAction.addRecord, (state) => ({
      ...state,
      adding: true,
    })),
    on(ProfileAction.recordAdded, (state) => ({
      ...state,
      adding: false,
      error: null,
    })),
    on(ProfileAction.error, (state, { error }) => ({ ...state, error })),
    on(ProfileAction.updateRecord, (state, records) => ({
      ...state,
      records,
    }))
  ),
  extraSelectors: ({ selectRecords }) => ({
    selectSegementRecords: (code: string) =>
      createSelector(selectRecords, (records) => records[code]),
    selectTxn: (code: string, id: string) =>
      createSelector(selectRecords, (records) =>
        records[code]?.find((record) => record.assetId == id)
      ),
  }),
});

export const {
  name: profileFeatureName,
  reducer,
  selectAdding,
  selectError,
  selectProfileState,
  selectRecords,
  selectSegementRecords,
  selectTxn,
} = profileFeature;
