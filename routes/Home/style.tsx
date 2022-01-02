import { StyleSheet } from "react-native";

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },

  wrapp: {
    width: "100%",
    paddingVertical: 20,
    /*  borderBottomWidth: 1,
    borderColor: "#c8c8c8", */
  },

  inputsItems: {
    position: "relative",
    paddingHorizontal: 40,
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    width: 340,
    left: 18,
  },
  icon: {
    position: "absolute",
    top: 32,
    left: 32,
    color: "#d8d8d8",
  },

  tabs: {
    width: "100%",
    paddingVertical: 20,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#d8d8d8",

    shadowRadius: 5,
  },

  tabsItem: {
    padding: 10,
    paddingHorizontal: 38,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 30,
  },
});

export default styleHome;
