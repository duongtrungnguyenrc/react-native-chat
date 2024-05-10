import { BaseResponseModel, LoginResponse } from "@/models";
import * as SecureStore from "expo-secure-store";
import chatService from "./chat.service";
import apiService from "./api.service";
import { dispath, setLoading } from "@/context";

class AuthService {
  private static instance: AuthService | null = null;

  private constructor() {
    if (!AuthService.instance) {
      AuthService.instance = this;
    }
    return AuthService.instance;
  }

  static getInstance(): AuthService {
    if (!this.instance) {
      this.instance = new AuthService();
    }
    return this.instance;
  }

  async signIn(email: string, password: string) {
    try {
      dispath(setLoading(true));

      const response = await apiService.getService().post("/auth/sign-in", {
        email,
        password,
      });

      if (response.status !== 200) {
        throw new Error(response.data.message);
      }

      await SecureStore.deleteItemAsync("access_token");
      await SecureStore.deleteItemAsync("refresh_token");
      SecureStore.setItem("access_token", response?.data.data.accessToken);
      SecureStore.setItem("refresh_token", response?.data.data.refreshToken);

      apiService.init(response?.data.data.accessToken);
      chatService.init(response?.data.data.accessToken);
      dispath(setLoading(false));

      return response.data as BaseResponseModel<LoginResponse>;
    } catch (error) {
      dispath(setLoading(false));
      throw error;
    }
  }

  signOut() {
    SecureStore.deleteItemAsync("access_token");
    SecureStore.deleteItemAsync("refresh_token");
  }

  getAuthTokens(): { accessToken: string; refreshToken: string } {
    return {
      accessToken: SecureStore.getItem("access_token") ?? "",
      refreshToken: SecureStore.getItem("refresh_token") ?? "",
    };
  }
}

const authService = AuthService.getInstance();
export default authService;
