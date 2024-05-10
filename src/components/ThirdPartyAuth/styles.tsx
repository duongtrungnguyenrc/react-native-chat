import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authOptions: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  authOption: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ececec",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 7,
  },
  decorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  decorDivider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  decorText: {
    marginHorizontal: 10,
    color: "#888",
  },
});
export default styles;
