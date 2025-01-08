import { createSlice } from '@reduxjs/toolkit';
import { IAuthResponse } from '@/types/auth';
import { loginUser } from './auth.action';

export interface IAuthState {
  token: IAuthResponse;
  isLoading: boolean;
  isAuthorized: boolean;
}

const initialState: IAuthState = {
  token: {
    token: '',
  },
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
  },
});
