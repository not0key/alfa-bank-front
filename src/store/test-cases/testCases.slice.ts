import { createSlice } from '@reduxjs/toolkit';
import { fetchTestCases, uploadFSD } from './testCases.action';
import { ITestCases } from '@/types/test-cases';

export interface ITestCasesState {
  testCase: string
  testCases: ITestCases[]
  isLoading: boolean;
}

const initialState: ITestCasesState = {
  testCase: '',
  testCases: [],
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
        state.testCase = action.payload;
        state.isLoading = false;
      })
      .addCase(uploadFSD.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchTestCases.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTestCases.fulfilled, (state, action) => {
        state.testCases = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTestCases.rejected, (state) => {
        state.isLoading = false;
      })
  },
});
