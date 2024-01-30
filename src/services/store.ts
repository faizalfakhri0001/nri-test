import { Product } from "types/entities";
import { ApiServiceInterface, ProductServiceInterface } from "./interfaces";

class ProductService implements ProductServiceInterface {

  private static instance: ProductService;

  constructor(
    private apiService: ApiServiceInterface
  ) {}

  public static getInstance(apiService: ApiServiceInterface): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService(apiService);
    }
    return ProductService.instance;
  }

  public async getAll(): Promise<Product[]> {
    const apiUrl = `${this.apiService.getBaseUrl()}/products`;
    const response = await this.apiService.fetchData<Product[]>(apiUrl);
    return response.data;
  }

  public async getById(id: number): Promise<Product> {
    const apiUrl = `${this.apiService.getBaseUrl()}/products/${id}`;
    const response = await this.apiService.fetchData<Product>(apiUrl)
    return response.data;
  } 
}

export default ProductService;