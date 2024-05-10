import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  seperator: {
    width: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#f1f3f4",
    marginEnd: 10,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  onlineStatusPoint: {
    width: 15,
    height: 15,
    backgroundColor: "#3cbe5c",
    position: "absolute",
    right: -5,
    bottom: -3,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  content: { flex: 1, display: "flex", flexDirection: "row" },
  userName: {
    fontWeight: "500",
    fontSize: 16,
  },
  email: {
    color: "gray",
    marginTop: 5,
  },
  friendButton: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f1f3f4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addFriendButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#4285F4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
