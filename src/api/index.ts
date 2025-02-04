import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const baseURL: string | undefined = process.env.REACT_APP_API_URL;
const token: string | undefined = process.env.REACT_APP_TOKEN;

const baseInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: (url: string, request?: AxiosRequestConfig<any> | undefined) =>
    baseInstance.get(url, request),
  delete: (url: string, request?: AxiosRequestConfig<any> | undefined) =>
    baseInstance.delete(url, request),
  post: (
    url: string,
    data: any,
    config?: AxiosRequestConfig<any> | undefined
  ) => baseInstance.post(url, data, config),
};

export default apiRequest;
