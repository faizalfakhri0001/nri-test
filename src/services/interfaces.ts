
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Product } from "types/entities";

export interface HttpServiceInterface {
  sendRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

export interface ApiServiceInterface {
  getBaseUrl(): string;
  fetchData<T>(url: string): Promise<AxiosResponse<T>>;
  postData<T>(url: string, data: AxiosRequestConfig<any>['data']): Promise<AxiosResponse<T>>;
}

export interface AuthServiceInterface {
  register(username: string, password: string): Promise<string>;
  login(username: string, password: string): Promise<string>;
}

export interface ProductServiceInterface {
  getAll(): Promise<Product[]>;
  getById(id: number): Promise<Product>;
}