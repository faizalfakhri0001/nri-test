import { AxiosResponse } from 'axios';
import type { ApiServiceInterface, HttpServiceInterface } from './interfaces';

class ApiService implements ApiServiceInterface {

  public base_api_url = "https://fakestoreapi.com"
  
  constructor(private httpService: HttpServiceInterface) {}
  
  getBaseUrl(): string {
    return this.base_api_url;
  }

  public async fetchData<T>(url: string): Promise<AxiosResponse<T>> {
    try {
      const response = await this.httpService.sendRequest<T>({
        method: 'get',
        url,
      });
  
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async postData<T>(url: string, data: any):  Promise<AxiosResponse<T>> {
    try {
      const response = await this.httpService.sendRequest<T>({
        method: 'post',
        url,
        data
      });
  
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default ApiService;