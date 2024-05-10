import { TouchableOpacity, View, Text } from "react-native";
import AuthFormHeader from "../FormHeader";
import FormInput from "../FormInput";
import Row from "../Row";
import styles from "./styles";
import ThirdPartyAuth from "../ThirdPartyAuth";
import Expanded from "../Expanded";
import { RegisterAccountRequest } from "@/models";
import { useState } from "react";
import Toast from "react-native-toast-message";

const RegisterForm = ({
  onSignInTap,
  onRegister,
}: {
  onSignInTap: Function;
  onRegister: (payload: RegisterAccountRequest) => void;
}) => {
  const [newUser, setNewUser] = useState<RegisterAccountRequest>(
    new RegisterAccountRequest()
  );

  const onChange = (text: string, key: string) => {
    setNewUser((prevState: RegisterAccountRequest) => {
      prevState[key as "name" | "email" | "phone" | "password" | "confirm"] =
        text;
      return prevState;
    });
  };

  const onSubmit = () => {
    const validationResult = newUser.validate();

    if (!validationResult) {
      onRegister(newUser);
    } else {
      Toast.show({
        type: "error",
        text1: "Invalid data",
        text2: validationResult,
      });
    }
  };

  return (
    <View style={styles.container}>
      <AuthFormHeader
        title="Register account"
        subTitle="Register new account to continue chat"
      />
      <ThirdPartyAuth />
      <FormInput
        label="Full name:"
        placeholder="Full name"
        name="name"
        onChange={onChange}
      />
      <FormInput
        keyboardType="email-address"
        label="Email:"
        placeholder="Email"
        name="email"
        onChange={onChange}
      />
      <FormInput
        keyboardType="phone-pad"
        label="Phone:"
        placeholder="Phone"
        name="phone"
        onChange={onChange}
      />
      <Row>
        <Expanded>
          <FormInput
            label="Password:"
            placeholder="Password"
            name="password"
            onChange={onChange}
            secure
          />
        </Expanded>
        <Expanded>
          <FormInput
            label="Confirm:"
            placeholder="Confirm"
            name="confirm"
            onChange={onChange}
            secure
          />
        </Expanded>
      </Row>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.signUpWrapper}>
        <Text>Already have account?</Text>
        <TouchableOpacity onPress={() => onSignInTap()}>
          <Text style={styles.signUpButton}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RegisterForm;
