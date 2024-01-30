import { Product } from "types/entities";
import { ApiServiceInterface, ProductServiceInterface } from "./interfaces";

class ProductService implements ProductServiceInterface {

  constructor (private apiService: ApiServiceInterface) {}

  public async getAll(): Promise<Product[]> {
    const apiUrl = `${this.apiService.getBaseUrl()}/products`;
    const response = await this.apiService.fetchData<Product[]>(apiUrl)
    return response.data;
  }

  public async getById(id: number): Promise<Product> {
    const apiUrl = `${this.apiService.getBaseUrl()}/products/${id}`;
    const response = await this.apiService.fetchData<Product>(apiUrl)
    return response.data;
  } 
}

export default ProductService;