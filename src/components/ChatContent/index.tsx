import { FlatList, RefreshControl, Text, View } from "react-native";
import styles from "./styles";
import { Message, Room } from "@/models";
import ChatMessage from "../ChatMessage";
import Expanded from "../Expanded";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/context";

const ChatContent = ({
  scrollRef,
  onRefresh,
  roomId,
}: {
  scrollRef: React.MutableRefObject<FlatList | any>;
  onRefresh: (page: number) => Promise<boolean>;
  roomId?: string;
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [tab, setTab] = useState(1);

  const room = useSelector((state: RootState) =>
    state.rooms.find((room: Room) => room._id === roomId)
  );

  const renderMessages = ({ item }: { item: Message }): React.ReactElement => (
    <ChatMessage message={item} me={item.me} />
  );

  const renderSperator = (): React.ReactElement => (
    <View style={styles.seperator} />
  );

  const handleRefresh = async () => {
    setRefreshing(true);
    const isRefresh = await onRefresh(tab + 1);
    if (isRefresh) {
      setTab((tab) => tab + 1);
    }
    setRefreshing(false);
  };

  return (
    <Expanded>
      <View style={styles.container}>
        <FlatList
          ref={scrollRef}
          style={styles.messageList}
          data={room?.messages}
          showsVerticalScrollIndicator={true}
          renderItem={renderMessages}
          ItemSeparatorComponent={renderSperator}
          contentContainerStyle={{ marginHorizontal: 10 }}
          keyExtractor={(item) => item._id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          snapToEnd
        />
      </View>
    </Expanded>
  );
};
export default ChatContent;
