import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import { NavigationProp } from "@react-navigation/native";
import { dispath, RootState, setVisible } from "@/context";
import { useSelector } from "react-redux";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

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
        <AntDesign name="home" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispath(setVisible(true));
        }}
        style={{ ...styles.newChatButton, opacity: visible ? 0 : 1 }}
      >
        <Entypo
          style={styles.newChatButtonIcon}
          name="plus"
          size={22}
          color="#fff"
        />
        <Text style={styles.newChatButtonText}>New chat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SettingTab");
        }}
        style={styles.normalButton}
      >
        <Feather name="settings" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default BottomNavigationBar;
