import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderColor: "#f1f3f4",
  },
  newChatButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4285F4",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  newChatButtonIcon: {
    color: "white",
    marginRight: 7,
  },
  newChatButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  normalButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 15,
  },
});

export default styles;
