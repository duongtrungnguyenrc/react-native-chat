import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import SearchInput from "../SearchInput";
import { useSelector } from "react-redux";
import { RootState } from "@/context";
import { useNavigation } from "@react-navigation/native";
import { userService } from "@/services";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppBar = () => {
  const navigation = useNavigation();

  const friendRequests = useSelector(
    (state: RootState) => state.friendRequests
  );

  const onOpenNotifications = () => {
    navigation.navigate("Notification" as never);
  };

  const onSearch = async (key: string): Promise<boolean> => {
    try {
      await userService.search(key);

      navigation.navigate("SearchResult" as never);
      return true;
    } catch (error) {
      console.log(`Search error: ${error}`);
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>Pattern</Text>
        <View style={styles.notificationButtonWrapper}>
          <TouchableOpacity
            onPress={onOpenNotifications}
            style={styles.notificationButton}
          >
            <MaterialCommunityIcons
              name="bell-ring-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {friendRequests.length > 0 && (
            <View style={styles.notificationCheckPoint} />
          )}
        </View>
      </View>
      <SearchInput searchCallback={onSearch} />
    </View>
  );
};
export default AppBar;
