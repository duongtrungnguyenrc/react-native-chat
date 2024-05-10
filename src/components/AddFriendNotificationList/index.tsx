import { FlatList, Modal, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@/context";
import React from "react";
import AddFriendNotificationItem from "../AddFriendNotificationItem";
import { FriendRequest } from "@/models";
import BackAppBar from "../BackAppBar";

const AddFriendNotificationList = () => {
  const addFriendRequest = useSelector(
    (state: RootState) => state.friendRequests
  );

  const renderItem = ({
    item,
  }: {
    item: FriendRequest;
  }): React.ReactElement => <AddFriendNotificationItem request={item} />;

  return (
    <View style={styles.container}>
      <BackAppBar heading="Notifications" />
      <FlatList
        style={styles.resultList}
        data={addFriendRequest}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ marginHorizontal: 10 }}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default AddFriendNotificationList;
