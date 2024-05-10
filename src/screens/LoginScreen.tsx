import { NavigationProp } from "@react-navigation/native";
import { LoginForm } from "@/components";
import { authService } from "@/services";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";
import { BaseResponseModel } from "@/models";

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const signIn = async (email: string, password: string) => {
    try {
      await authService.signIn(email, password);
      navigation.navigate("Home");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorData: BaseResponseModel<any> = error.response?.data;
        Toast.show({
          type: "error",
          text1: "Login fail!",
          text2: errorData.message,
        });
      }
    }
  };

  const toRegisterScreen = () => {
    navigation.navigate("Register");
  };

  return <LoginForm onSignUpTap={toRegisterScreen} onSignIn={signIn} />;
};
export default LoginScreen;
