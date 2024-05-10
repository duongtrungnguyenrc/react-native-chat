import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  button: {
    marginTop: 20,
    width: "100%",
    padding: 15,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpWrapper: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    color: "#4285F4",
    fontWeight: "500",
    padding: 5,
  },
});
export default styles;
