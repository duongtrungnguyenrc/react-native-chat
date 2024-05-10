import * as SecureStore from "expo-secure-store";

export function getAuthTokens(): {
  accessToken: string;
  refreshToken: string;
} {
  return {
    accessToken: SecureStore.getItem("access_token") ?? "",
    refreshToken: SecureStore.getItem("refresh_token") ?? "",
  };
}
