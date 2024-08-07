import axios, {AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios';
import {toast} from 'react-toastify';
import {getToken} from './token.ts';

type DetailMessageType = {
  type: string;
  message: string;
}

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      // if (error.response && shouldDisplayError(error.response)) {
      if (error.response) {
        const detailMessage = (error.response.data);

        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
