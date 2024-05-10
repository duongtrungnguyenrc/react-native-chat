import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  messageWrapperReceiver: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "70%",
    marginRight: 5,
  },
  messageWrapperSender: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "70%",
    marginLeft: 5,
  },
  messageDecor: {
    objectFit: "cover",
    marginLeft: -1,
    marginRight: -1,
    marginTop: 10,
  },
  messageSender: {
    marginTop: 15,
    padding: 10,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#f1f3f4",
  },
  messageReceiver: {
    marginTop: 15,
    padding: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#4285F4",
  },
  messageTextSender: {},
  messageTextReceiver: { color: "#fff" },
  avatarWrapper: {
    width: 25,
    height: 25,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "gray",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
export default styles;
