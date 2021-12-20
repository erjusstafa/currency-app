import { StyleSheet } from "react-native";

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  wrapp: {
    backgroundColor: "blue",
  },

  data: {
    paddingHorizontal: 40,
    paddingVertical: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "yellow",
  },
  images: {
    zIndex: 9999,
    width: 50,
    height: 50,
  },
});

export default styleHome;
