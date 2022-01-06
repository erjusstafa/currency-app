import { StyleSheet } from "react-native";
import {
  BG_LIST_ITEM,
  BG_TRASPARENT,
  BORDER_COLOR,
  LEYLA_COLOR,
  WHITE_COLOR,
} from "../../constants";

const styleTabs = StyleSheet.create({
  tabs: {
    width: "90%",
    paddingVertical: 20,
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",

    flexDirection: "row",
    borderColor: BORDER_COLOR,
    shadowRadius: 5,
  },

  tabsItem: {
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 30,
  },
});

export default styleTabs;
