import { API_ENDPOINT } from "@/shared/constants/apiEnpoints";
import { createAsyncAction } from "@/shared/lib/async-thunk";
import { instance } from "@/shared/lib/axios";
import { ITestCases } from "@/types/test-cases";

export const uploadFSD = createAsyncAction<string, FormData>(
  'testCases/uploadFSD',
  async (data, axiosInstance) => {
    const response = await axiosInstance.post(API_ENDPOINT.testCases, data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },
  instance
);

export const fetchTestCases = createAsyncAction<ITestCases[], void>(
  'testCases/fetchTestCases',
  async (__, axiosInstance) => {
    const response = await axiosInstance.get(API_ENDPOINT.testCases);
    return response.data;
  },
  instance
);