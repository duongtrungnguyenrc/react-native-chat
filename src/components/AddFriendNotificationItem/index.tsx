import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Expanded from "../Expanded";
import { BaseResponseModel, FriendRequest } from "@/models";
import Row from "../Row";
import { userService } from "@/services";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";
import { err } from "react-native-svg";

const AddFriendNotificationItem = ({ request }: { request: FriendRequest }) => {
  const replyRequest = async (accept: boolean) => {
    try {
      const response: BaseResponseModel<any> =
        await userService.replyAddFriendRequest(request._id, accept);

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

  const onAccept = () => {
    replyRequest(true);
  };

  const onReject = () => {
    replyRequest(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.image} source={{ uri: request.from.avatar }} />
        {request.from.isOnline && <View style={styles.onlineStatusPoint} />}
      </View>
      <View style={styles.content}>
        <Expanded>
          <Text style={styles.userName}>
            {request.from.name.split(" ").reverse()[0]} send you a friend
            request
          </Text>
          <Text style={styles.email}>{request.from.email}</Text>
          <Row>
            <Expanded>
              <TouchableOpacity onPress={onReject} style={styles.rejectButton}>
                <Text style={{ ...styles.buttonText, color: "#000" }}>
                  Reject
                </Text>
              </TouchableOpacity>
            </Expanded>
            <Expanded>
              <TouchableOpacity onPress={onAccept} style={styles.acceptButton}>
                <Text style={{ ...styles.buttonText, color: "#fff" }}>
                  Accept
                </Text>
              </TouchableOpacity>
            </Expanded>
          </Row>
        </Expanded>
      </View>
    </View>
  );
};
export default AddFriendNotificationItem;
