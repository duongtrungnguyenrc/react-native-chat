import { DefaultLayout } from "@/layouts";
import { ChatAppBar, ChatContent, ChatForm } from "@/components";
import { useEffect, useRef } from "react";
import { chatService } from "@/services";
import { Message, Room, User } from "@/models";
import { RouteProp } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "@/context";
import { FlatList } from "react-native";

type RootStackParamList = {
  Chat: { roomId?: string; receiver?: User };
};

const ChatScreen = ({
  route,
}: {
  route: RouteProp<RootStackParamList, "Chat">;
}) => {
  const flatListRef = useRef<FlatList>(null);
  const { roomId, receiver } = route.params;

  const room = useSelector((state: RootState) =>
    state.rooms.find(
      (room: Room) =>
        room._id === roomId ||
        room.users.some(
          (user) => user._id.toString() === receiver?._id.toString()
        )
    )
  );

  useEffect(() => {
    room ? chatService.joinRoom(room._id) : loadRoom();
    chatService.registerSentMessageAction(onSentMessage);
    chatService.registerReceiveMessageAction(onReceiveMessage);
  }, []);

  const loadRoom = () => {
    chatService.getRoom(receiver?._id, 1, 20);
  };

  const onSentMessage = (_message: Message) => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const onReceiveMessage = (_message: Message) => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const loadMessages = async (page: number): Promise<boolean> => {
    const messages = await chatService.getMessages(page, 20, room?._id);
    if (messages.data.length === 0) {
      return false;
    }
    return true;
  };

  const sendMessage = (message: string) => {
    chatService.sendMessage(message, receiver?._id ?? room?.users[0]._id);
  };

  return (
    <DefaultLayout
      appBar={<ChatAppBar user={receiver ?? room?.users[0]} />}
      bottomNavigationBar={<ChatForm onSend={sendMessage} />}
    >
      <ChatContent
        scrollRef={flatListRef}
        roomId={room?._id}
        onRefresh={loadMessages}
      />
    </DefaultLayout>
  );
};
export default ChatScreen;
