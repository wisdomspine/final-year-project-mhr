import { HL7Database } from '@app/core/store/hl7-data/hl7-data.state';
import {
  hl7Database,
  profileSegments,
  profileSegmentsMap,
} from './hl7-database';
import { createFeature, createReducer, createSelector } from '@ngrx/store';

export const hl7DataFeature = createFeature({
  name: 'hl7Data',
  reducer: createReducer(hl7Database),
  extraSelectors: ({ selectHl7DataState }) => ({
    selectSegmentsCode: createSelector(selectHl7DataState, (state) =>
      Object.keys(state)
    ),
    filterSegments: (segmentsCodes: string[]) =>
      createSelector(selectHl7DataState, (state) => {
        const filtered: HL7Database = {};
        for (const code of segmentsCodes) {
          if (code in state) {
            filtered[code] = state[code];
          }
        }
        return filtered;
      }),
    selectSegment: (code: string) =>
      createSelector(selectHl7DataState, (state) => state[code]),
  }),
});

export const {
  name: hl7DataFeatureName,
  reducer,
  selectHl7DataState,
  selectSegmentsCode,
  filterSegments,
  selectSegment,
} = hl7DataFeature;

export const selectProfileSegments = createSelector(
  filterSegments(profileSegments.map((segment) => segment.code)),
  (filtered) => {
    const keys = Object.keys(filtered);
    for (const key of keys) {
      filtered[key] = {
        ...filtered[key],
        title: profileSegmentsMap[key].title,
      };
    }
    return filtered;
  }
);
