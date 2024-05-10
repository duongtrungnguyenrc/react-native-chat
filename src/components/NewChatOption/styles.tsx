import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    paddingVertical: 15,
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  contentWrapper: {},
  mainText: {
    fontWeight: "500",
  },
  subText: {
    color: "gray",
    marginTop: 3,
    fontSize: 13,
  },
});
export default styles;
