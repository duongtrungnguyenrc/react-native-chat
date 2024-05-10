import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const BackAppBar = ({ heading }: { heading: string }) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.actionButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
      </TouchableOpacity>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.actionButton} />
    </View>
  );
};
export default BackAppBar;
