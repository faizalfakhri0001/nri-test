import ApiService from "./api";
import AuthService from "./auth";
import HttpService from "./http";
import ProductService from "./store";

const httpService = new HttpService()
const apiService = new ApiService(httpService);

const authService = AuthService.getInstance(apiService);
const productService = ProductService.getInstance(apiService);

export {
  authService, productService,
};
