import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View } from "react-native";
import styles from "./styles";
import React from "react";

const NewChatOption = ({
  icon,
  mainText,
  subText,
}: {
  icon: React.ReactElement;
  mainText: string;
  subText: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>{icon}</View>
      <View style={styles.contentWrapper}>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </View>
  );
};
export default NewChatOption;
