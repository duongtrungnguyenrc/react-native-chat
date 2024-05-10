import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 55,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  divider: {
    height: 1,
    backgroundColor: "#f1f3f4",
    width: "100%",
  },
  modalView: {
    margin: 20,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    elevation: 5,
  },
  closeButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#ececec",
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default styles;
