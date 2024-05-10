import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Row = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.row}>{children}</View>;
};
export default Row;
