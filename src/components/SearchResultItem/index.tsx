import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Expanded from "../Expanded";
import { BaseResponseModel, User } from "@/models";
import { userService } from "@/services";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";
import { NavigationProp } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";

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
                // <FontAwesomeIcon icon={faUserCheck} size={18} />
                <SvgXml
                  xml={
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>'
                  }
                  width={18}
                  height={18}
                />
              ) : (
                <SvgXml
                  xml={
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>'
                  }
                  width={18}
                  height={18}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SearchResultItem;
