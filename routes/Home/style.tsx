import { StyleSheet } from "react-native";
import {
  BG_LIST_ITEM,
  BG_TRASPARENT,
  BORDER_COLOR,
  LEYLA_COLOR,
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
    backgroundColor: LEYLA_COLOR,
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
});

export default styleHome;
