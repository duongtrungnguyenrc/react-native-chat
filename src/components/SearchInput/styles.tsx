import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  searchInput: {
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    height: 54,
    paddingRight: 54,
  },
  searchButton: {
    width: 40,
    height: 40,
    margin: 7,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    top: 0,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#4285F4",
  },
  searchButtonIcon: {
    color: "#fff",
  },
});

export default styles;
