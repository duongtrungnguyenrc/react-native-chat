import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavigationProp } from "@react-navigation/native";
import { dispath, RootState, setVisible } from "@/context";
import { useSelector } from "react-redux";
import { faComments, faUser } from "@fortawesome/free-regular-svg-icons";

const BottomNavigationBar = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const visible = useSelector((state: RootState) => state.newChatModalVisible);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeTab");
        }}
        style={styles.normalButton}
      >
        <FontAwesomeIcon size={30} icon={faComments} color="#4285F4" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispath(setVisible(true));
        }}
        style={{ ...styles.newChatButton, opacity: visible ? 0 : 1 }}
      >
        <FontAwesomeIcon style={styles.newChatButtonIcon} icon={faPlus} />
        <Text style={styles.newChatButtonText}>New chat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SettingTab");
        }}
        style={styles.normalButton}
      >
        <FontAwesomeIcon size={24} icon={faUser} color="#4285F4" />
      </TouchableOpacity>
    </View>
  );
};
export default BottomNavigationBar;
