import { API_ENDPOINT } from "@/shared/constants/apiEnpoints";
import { createAsyncAction } from "@/shared/lib/async-thunk";
import { instance } from "@/shared/lib/axios";

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