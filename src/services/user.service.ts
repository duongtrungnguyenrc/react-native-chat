import {
  BaseResponseModel,
  FriendRequest,
  RegisterAccountRequest,
  User,
} from "@/models";
import { AxiosError } from "axios";
import {
  deleteRequest,
  dispath,
  loadRequest,
  loadResult,
  setLoading,
} from "@/context";
import apiService from "./api.service";
import * as SecureStore from "expo-secure-store";

class UserService {
  private static instance: UserService | null = null;

  private constructor() {
    if (!UserService.instance) {
      UserService.instance = this;
    }
    return UserService.instance;
  }

  static getInstance(): UserService {
    if (!this.instance) {
      this.instance = new UserService();
    }
    return this.instance;
  }

  async signUp(payload: RegisterAccountRequest) {
    const response = await apiService.getService().post("/user/sign-up", {
      ...payload,
    });

    if (response.status !== 200) {
      throw new Error(response.data.message);
    }

    return response;
  }

  async search(key: string) {
    const response = await apiService
      .getService()
      .get("user/search", { params: { key } });

    if (response.status !== 200) throw new AxiosError(response.statusText);

    dispath(loadResult((response.data as BaseResponseModel<User[]>).data));

    return response.data as BaseResponseModel<User[]>;
  }

  async getFriendRequest() {
    const response = await apiService.getService().get("user/friend-requests");

    if (response.status !== 200) throw new AxiosError(response.statusText);
    const data = response.data as BaseResponseModel<FriendRequest[]>;

    dispath(loadRequest(data.data));

    return data;
  }

  async requestAddFriend(uid: string) {
    const response = await apiService
      .getService()
      .post("user/add-friend", { to: uid });

    if (response.status !== 201) throw new AxiosError(response.statusText);
    const data = response.data as BaseResponseModel<FriendRequest>;

    return data;
  }

  async replyAddFriendRequest(requestId: string, accept: boolean) {
    const response = await apiService
      .getService()
      .put("user/reply-add-friend", { requestId, accept });

    if (response.status !== 200) throw new AxiosError(response.statusText);
    dispath(deleteRequest(requestId));
    const data = response.data as BaseResponseModel<FriendRequest>;
    return data;
  }
}

const authService = UserService.getInstance();
export default authService;
