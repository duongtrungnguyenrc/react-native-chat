import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ececec",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    padding: 10,
    height: 40,
    marginVertical: 5,
  },
  sendButton: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4",
    borderRadius: 10,
    margin: 5,
  },
});

export default styles;
