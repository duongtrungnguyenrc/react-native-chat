import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import ThirdPartyAuth from "../ThirdPartyAuth";
import AuthFormHeader from "../FormHeader";
import FormInput from "../FormInput";
import { useDebouncedCallback } from "use-debounce";

const LoginForm = ({
  onSignUpTap,
  onSignIn,
}: {
  onSignUpTap: () => void;
  onSignIn: (email: string, password: string) => void;
}) => {
  const [email, setEmail] = useState("duongtrungnguyen00@gmail.com");
  const [password, setPassword] = useState("nguyendeptraivaicac");

  const handleEmailChange = useDebouncedCallback((text: string) => {
    setEmail(text);
  }, 300);

  const handlePasswordChange = useDebouncedCallback((text: string) => {
    setPassword(text);
  }, 300);

  const onSubmit = () => {
    onSignIn(email, password);
  };

  return (
    <View style={styles.container}>
      <AuthFormHeader
        title="Sign in to Pattern"
        subTitle="Welcome back, please login to continue"
      />

      <ThirdPartyAuth />

      <FormInput
        placeholder="Email"
        label="Email:"
        defaultValue={email}
        onChange={handleEmailChange}
        keyboardType="email-address"
      />
      <FormInput
        placeholder="Password"
        label="Password:"
        defaultValue={password}
        onChange={handlePasswordChange}
        secure={true}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.signUpWrapper}>
        <Text>Don't have account?</Text>
        <TouchableOpacity onPress={onSignUpTap}>
          <Text style={styles.signUpButton}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
