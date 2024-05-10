import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Expanded from "../Expanded";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const ChatForm = ({ onSend }: { onSend: (message: string) => void }) => {
  const [message, setMessage] = useState("");

  const onMessageChange = useDebouncedCallback((message: string) => {
    setMessage(message);
  }, 300);

  const handleSendMessage = () => {
    onSend(message);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.container}>
        <Expanded>
          <TextInput
            style={styles.input}
            placeholder="Aa"
            defaultValue={message}
            onChangeText={onMessageChange}
          />
        </Expanded>
        {message && (
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
            <FontAwesomeIcon icon={faPaperPlane} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
export default ChatForm;
