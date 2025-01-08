import { createSlice } from '@reduxjs/toolkit';
import { IAuthResponse, IUser } from '@/types/auth';
import { fetchCurrentUser, loginUser } from './auth.action';

export interface IAuthState {
  token: IAuthResponse;
  user: IUser | null
  isLoading: boolean;
  isAuthorized: boolean;
}

const initialState: IAuthState = {
  token: {
    token: '',
  },
  user: null,
  isLoading: false,
  isAuthorized: false,
};

export const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthorized = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoading = false;
        state.isAuthorized = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthorized = false;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isLoading = false;
      })
  },
});
