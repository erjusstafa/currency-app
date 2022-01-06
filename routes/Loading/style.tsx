import { StyleSheet } from "react-native";
import {
  BG_LIST_ITEM,
  BG_WHITE,
  GRAY_COLOR,
  LEYLA_COLOR,
  OTHER_COLOR,
  PRICE_COLOR,
  WHITE_COLOR,
} from "../../constants";

const styleLoading = StyleSheet.create({
  containerLoading: {
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    /*     backgroundColor: LEYLA_COLOR,
     */
  },

  title: {
    color: WHITE_COLOR,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default styleLoading;
