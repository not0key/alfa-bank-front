import { createSlice } from '@reduxjs/toolkit';
import { uploadFSD } from './testCases.action';

export interface ITestCasesState {
  testCases: string
  isLoading: boolean;
}

const initialState: ITestCasesState = {
  testCases: '',
  isLoading: false,
};

export const testCasesSlice = createSlice({
  name: 'testCases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFSD.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadFSD.fulfilled, (state, action) => {
        state.testCases = action.payload;
        state.isLoading = false;
      })
      .addCase(uploadFSD.rejected, (state) => {
        state.isLoading = false;
      })
  },
});
