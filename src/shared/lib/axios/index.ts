import axios from 'axios';

const baseURL = `${import.meta.env.VITE_API_BASE_URL}`;

export const instance = axios.create({
  baseURL,
  timeout: 10000000,
  headers: {},
});

export const instanceAuth = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'foobar',
  },
});

instanceAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instanceAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    if (response && response.status === 401 && !config.__isRetryRequest) {
      config.__isRetryRequest = true;

      const refreshToken = localStorage.getItem('refreshToken');
      const rememberMe = localStorage.getItem('rememberMe') === 'true';

      if (!rememberMe || !refreshToken) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
