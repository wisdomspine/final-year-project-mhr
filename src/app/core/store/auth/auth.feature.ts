import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { AuthState, AuthAction } from './';

const initialState: AuthState = {
  address: null,
  error: null,
  isAuthenticating: false,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(AuthAction.connect, (state) => ({
      ...state,
      isAuthenticating: true,
      error: null,
    })),
    on(AuthAction.connected, (state, { address }) => ({
      ...state,
      address,
      error: null,
      isAuthenticating: false,
    })),
    on(AuthAction.disconnect, (state) => ({
      ...state,
      isAuthenticating: true,
    })),
    on(AuthAction.error, (state, { message }) => ({
      ...state,
      error: message,
      isAuthenticating: false,
    })),
    on(AuthAction.disconnected, (state) => ({
      ...state,
      error: null,
      isAuthenticating: false,
    }))
  ),
  extraSelectors: ({ selectAddress }) => ({
    isConnected: createSelector(selectAddress, (address) => address != null),
  }),
});

export const {
  name: authFeatureName,
  reducer,
  selectAddress,
  selectAuthState,
  selectError,
  selectIsAuthenticating,
  isConnected,
} = authFeature;
