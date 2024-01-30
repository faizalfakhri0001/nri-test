import { ApiServiceInterface, AuthServiceInterface } from "./interfaces";


class AuthService implements AuthServiceInterface {
  private static instance: AuthService;

  constructor(
    private apiService: ApiServiceInterface
  ) {}

  public static getInstance(apiService: ApiServiceInterface): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService(apiService);
    }

    return AuthService.instance;
  }
  
  public async register(username: string, password: string): Promise<string> {
    const apiUrl = `${this.apiService.getBaseUrl()}/register`;
    const response = await this.apiService.postData<string>(apiUrl, {username, password})
    return response.data;
  }
  
  public async login(username: string, password: string): Promise<string> {
    const apiUrl = `${this.apiService.getBaseUrl()}/login`;
    const response = await this.apiService.postData<string>(apiUrl, {username, password})
    return response.data;
  }
}

export default AuthService;