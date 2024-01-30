import ApiService from "./api";
import AuthService from "./auth";
import HttpService from "./http";

const httpService = new HttpService()
const apiService = new ApiService(httpService);

const authService = AuthService.getInstance(apiService);

export {
  authService,
};
