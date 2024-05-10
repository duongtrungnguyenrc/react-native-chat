import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#f1f3f4",
    paddingVertical: 5,
  },
  actionButton: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default styles;
