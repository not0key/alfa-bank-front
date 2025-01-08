import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authUserSlice } from './auth/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authUserSlice.reducer
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
