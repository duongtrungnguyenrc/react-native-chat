import { Modal, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
import NewChatOption from "../NewChatOption";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressBook, faMessage } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { dispath, RootState, setVisible } from "@/context";

const NewChatModal = () => {
  const visible = useSelector((state: RootState) => state.newChatModalVisible);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        dispath(setVisible(false));
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ width: "100%" }}>
            <NewChatOption
              icon={<FontAwesomeIcon icon={faMessage} size={22} />}
              mainText="New Chat"
              subText="Send message to your contact"
            />
            <View style={styles.divider} />
            <NewChatOption
              icon={<FontAwesomeIcon icon={faAddressBook} size={22} />}
              mainText="Add contact"
              subText="Add contact to be able to send messages"
            />
          </View>
        </View>
        <View style={styles.closeButtonWrapper}>
          <TouchableOpacity
            onPress={() => {
              dispath(setVisible(false));
            }}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default NewChatModal;
