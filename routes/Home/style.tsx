import { StyleSheet } from "react-native";
import {
  BG_LIST_ITEM,
  BG_TRASPARENT,
  BORDER_COLOR,
  WHITE_COLOR,
} from "../../constants";

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },

  wrapp: {
    width: "100%",
    paddingVertical: 20,
    /*  borderBottomWidth: 1,
    borderColor: "#c8c8c8", */
  },

  containerListItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  introItem: {
    width: "80%",
    borderRadius: 25,
    backgroundColor: BG_LIST_ITEM,
  },
  inputsItems: {
    position: "relative",
    paddingHorizontal: 40,
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    width: 340,
    left: 18,
  },
  icon: {
    position: "absolute",
    top: 32,
    left: 32,
    color: BORDER_COLOR,
  },

  tabs: {
    width: "100%",
    paddingVertical: 20,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: BORDER_COLOR,

    shadowRadius: 5,
  },

  tabsItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 30,
  },
});

export default styleHome;
