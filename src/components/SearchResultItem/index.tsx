import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Expanded from "../Expanded";
import { BaseResponseModel, User } from "@/models";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { userService } from "@/services";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";
import { NavigationProp } from "@react-navigation/native";

const SearchResultItem = ({
  user,
  navigation,
}: {
  user: User;
  navigation: NavigationProp<any>;
}) => {
  const onAddFriend = async () => {
    try {
      const response = await userService.requestAddFriend(user._id.toString());
      Toast.show({
        type: "success",
        text1: "Notification",
        text2: response.message,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorData: BaseResponseModel<any> = error.response?.data;
        Toast.show({
          type: "error",
          text1: "Error",
          text2: errorData.message,
        });
      }
    }
  };

  const onPress = () => {
    if (user.isFriend) {
      navigation.navigate("Chat", { receiver: user });
    } else {
      Toast.show({
        type: "error",
        text1: "Notification",
        text2: "Please add friend to send message",
      });
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image style={styles.image} source={{ uri: user.avatar }} />
          {user.isOnline && <View style={styles.onlineStatusPoint} />}
        </View>
        <View style={styles.content}>
          <Expanded>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </Expanded>
          {!user.isFriend && (
            <TouchableOpacity
              onPress={onAddFriend}
              disabled={user.isFriend}
              style={
                user.addFriend ? styles.friendButton : styles.addFriendButton
              }
            >
              {user.addFriend ? (
                <FontAwesomeIcon icon={faUserCheck} size={18} />
              ) : (
                <FontAwesomeIcon icon={faUserPlus} size={18} color="#fff" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SearchResultItem;
