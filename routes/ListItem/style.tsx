import { StyleSheet } from "react-native";
import {
  BACKGROUND_PRIMARY,
  BG_LIST_ITEM,
  BG_WHITE,
  GRAY_COLOR,
  LEYLA_COLOR,
  OTHER_COLOR,
  PRICE_COLOR,
  WHITE_COLOR,
} from "../../constants";

const styleListItem = StyleSheet.create({
  containerListItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: BACKGROUND_PRIMARY,
  },

  introItem: {
    width: "90%",
    marginVertical: 30,
    maxHeight: 200,
    minHeight: 100,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
  },

  details: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    left: -30,
  },

  detailsName: {
    color: GRAY_COLOR,
  },

  priceDetails: {
    display: "flex",
    flexDirection: "row",
  },
  currentPrice: {
    color: PRICE_COLOR,
    fontSize: 20,
    fontWeight: "700",
    left: 3,
  },
  suffixPriceDetails: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    borderRadius: 7,
    left: 13,
    backgroundColor: OTHER_COLOR,
  },

  BottomButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: 30,
    backgroundColor: "white",
  },

  ButtonBuy: {
    width: 150,
    height: 50,
    backgroundColor: LEYLA_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  ButtonSell: {
    width: 150,
    height: 50,
    backgroundColor: OTHER_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});

export default styleListItem;
