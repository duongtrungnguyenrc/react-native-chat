import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  avatarContainer: {
    width: 65,
    height: 65,
    borderRadius: 15,
    backgroundColor: "#f1f3f4",
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
  name: {
    marginTop: 7,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default styleSheet;
