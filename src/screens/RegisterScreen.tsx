import { NavigationProp } from "@react-navigation/native";
import { RegisterForm } from "@/components";
import { RegisterAccountRequest } from "@/models";
import { userService } from "@/services";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";

const RegisterScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const toLoginScreen = () => {
    navigation.navigate("Login");
  };

  const handleRegister = async (payload: RegisterAccountRequest) => {
    try {
      await userService.signUp(payload);
      navigation.navigate("Login");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Register failed",
        text2: (error as AxiosError).message,
      });
    }
  };

  return (
    <RegisterForm onSignInTap={toLoginScreen} onRegister={handleRegister} />
  );
};
export default RegisterScreen;
