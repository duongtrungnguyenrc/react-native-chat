import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import RoomItem from "../RoomItem";
import Expanded from "../Expanded";
import { Room } from "@/models";
import { NavigationProp } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "@/context";

const RoomList = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const rooms = useSelector((state: RootState) => state.rooms);

  const renderItem = ({ item }: { item: Room }) => {
    return <RoomItem navigation={navigation} room={item} />;
  };
  const renderSperator = () => <View style={styles.seperator} />;
  return (
    <Expanded>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Chats</Text>
        </View>
        <FlatList
          data={rooms}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={renderSperator}
        />
      </View>
    </Expanded>
  );
};
export default RoomList;
