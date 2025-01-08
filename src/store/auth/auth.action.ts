import { API_ENDPOINT } from "@/shared/constants/apiEnpoints";
import { createAsyncAction } from "@/shared/lib/async-thunk";
import { instance } from "@/shared/lib/axios";
import { IAuthResponse, ILoginData } from "@/types/auth";

export const loginUser = createAsyncAction<IAuthResponse, ILoginData>(
  'auth/login',
  async (data, axiosInstance) => {
    const response = await axiosInstance.post(API_ENDPOINT.login, data);
    localStorage.setItem('token', response.data.token);
    return response.data;
  },
  instance
);