import { View, Text } from "react-native";
import styles from "./styles";

const AuthFormHeader = ({title, subTitle}: {title: string, subTitle: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
};
export default AuthFormHeader;
