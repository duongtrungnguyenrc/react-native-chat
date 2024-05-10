import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#f1f3f4",
  },
  backButton: { padding: 10 },
  content: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarWrapper: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "gray",
    position: "relative",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    objectFit: "cover",
  },
  onlineStatusPoint: {
    width: 15,
    height: 15,
    backgroundColor: "#3cbe5c",
    position: "absolute",
    right: -2,
    bottom: -2,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  email: { fontSize: 12 },
});

export default styles;
