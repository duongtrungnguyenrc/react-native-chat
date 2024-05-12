import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import styles from "./styles";
import Expanded from "../Expanded";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

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
            <FontAwesome name="send-o" size={20} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
export default ChatForm;
