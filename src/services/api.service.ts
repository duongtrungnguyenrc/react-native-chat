import axios, { AxiosInstance } from "axios";

class Api {
  private static instance: Api | null = null;
  private api: AxiosInstance = axios.create({
    baseURL: "http://192.168.31.215:3000/api/",
  });

  private constructor() {}

  getService() {
    return this.api;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Api();
    }
    return this.instance;
  }

  init(accessToken: string) {
    this.api.interceptors.request.use(function (config) {
      config.headers.Authorization = `Bearer ${accessToken}`;

      return config;
    });
  }
}
const apiService = Api.getInstance();
export default apiService;
