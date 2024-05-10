import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Expanded from "../Expanded";
import { NavigationProp } from "@react-navigation/native";
import { Room } from "@/models";
import { getTime } from "@/helper";

const RoomItem = ({
  navigation,
  room,
}: {
  navigation: NavigationProp<any>;
  room: Room;
}) => {
  const lastMessage = room.messages[room.messages.length - 1] ?? "No messages";

  const openRoom = () => {
    navigation.navigate("Chat", { roomId: room._id });
  };

  return (
    <TouchableOpacity onPress={openRoom}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image style={styles.image} source={{ uri: room.users[0].avatar }} />
          {room.users[0].isOnline && <View style={styles.onlineStatusPoint} />}
        </View>
        <View style={styles.content}>
          <Expanded>
            <Text style={styles.userName}>{room.users[0].name}</Text>
            <Text style={styles.lastMessage}>{lastMessage.message}</Text>
          </Expanded>
          <View>
            <Text>{getTime(lastMessage?.time) ?? ""}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RoomItem;
