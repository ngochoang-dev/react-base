import Axios, { isAxiosError } from 'axios';
import { accessToken } from './local-store';

const api = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(
  config => {
    const token = accessToken().get();
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    const token = response.headers['authorization']?.split(' ')[1];

    if (token) {
      accessToken().set(token);
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;

export const getAxiosError = (error: Error | null) => {
  if (!error) return '';
  if (isAxiosError(error)) {
    const e = error.response?.data?.errors;

    if (Array.isArray(e)) {
      return e[0] || '';
    }

    return e;
  }

  return error.message;
};
