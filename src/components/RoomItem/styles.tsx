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
    width: 60,
    height: 60,
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
    fontWeight: "600",
    fontSize: 16,
  },
  lastMessage: {
    color: "gray",
    marginTop: 5,
  },
});

export default styles;
