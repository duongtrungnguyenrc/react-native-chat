import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Expanded = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Expanded;
