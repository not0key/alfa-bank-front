import { API_ENDPOINT } from "@/shared/constants/apiEnpoints";
import { createAsyncAction } from "@/shared/lib/async-thunk";
import { instance, instanceAuth } from "@/shared/lib/axios";
import { IAuthResponse, ILoginData, IUser } from "@/types/auth";

export const loginUser = createAsyncAction<IAuthResponse, ILoginData>(
  'auth/loginUser',
  async (data, axiosInstance) => {
    const response = await axiosInstance.post(API_ENDPOINT.login, data);
    localStorage.setItem('token', response.data.token);
    return response.data;
  },
  instance
);

export const fetchCurrentUser = createAsyncAction<IUser, void>(
  'auth/fetchCurrentUser',
  async (__, axiosInstance) => {
    const response = await axiosInstance.get(API_ENDPOINT.user);
    return response.data;
  },
  instanceAuth
);