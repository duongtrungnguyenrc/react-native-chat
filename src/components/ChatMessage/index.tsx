import { View, Image, Text } from "react-native";
import { Message } from "@/models";
import styles from "./styles";
import { SvgXml } from "react-native-svg";

const ChatMessage = ({ message, me }: { message: Message; me: boolean }) => {
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: me ? "flex-end" : "flex-start",
      }}
    >
      {!me && (
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={{ uri: message.sender.avatar }}
          />
        </View>
      )}
      <View
        style={me ? styles.messageWrapperReceiver : styles.messageWrapperSender}
      >
        {!me && (
          <SvgXml
            style={styles.messageDecor}
            xml={
              '<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2C6.88453 4.20915 9.90306 5.10909 17 4.63158V12C8.65263 9.56519 5.16924 7.58113 2 2Z" fill="#F1F3F4" stroke="#F1F3F4"/></svg>'
            }
            width="10"
            height="13"
          />
        )}
        <View style={me ? styles.messageReceiver : styles.messageSender}>
          <Text
            style={me ? styles.messageTextReceiver : styles.messageTextSender}
          >
            {message.message}
          </Text>
        </View>
        {me && (
          <SvgXml
            style={styles.messageDecor}
            xml={
              '<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2C11.1155 4.20915 8.09694 5.10909 1 4.63158V12C9.34737 9.56519 12.8308 7.58113 16 2Z" fill="#4285F4" stroke="#4285F4"/></svg>'
            }
            width="10"
            height="13"
          />
        )}
      </View>
      {me && (
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={{ uri: message.sender.avatar }}
          />
        </View>
      )}
    </View>
  );
};
export default ChatMessage;
