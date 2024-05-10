import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    paddingHorizontal: 15,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationButtonWrapper: { position: "relative" },
  notificationCheckPoint: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    right: 0,
  },
  notificationButton: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#f1f3f4",
  },
  brand: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default styles;
