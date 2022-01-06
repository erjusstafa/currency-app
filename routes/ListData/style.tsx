import { StyleSheet } from "react-native";
import { BACKGROUND_PRIMARY, WHITE_COLOR } from "../../constants";

const styleList = StyleSheet.create({
  wrapperList: {
    backgroundColor: BACKGROUND_PRIMARY,
  },
  data: {
    width: "88%",
    height: 100,
    alignSelf: "center",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: WHITE_COLOR,
    shadowColor: "#e3e6e7",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
  },
  images: {
    zIndex: 9,
    width: 50,
    height: 50,
  },

  description: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    top: 6,
    marginHorizontal: 0,
  },

  rank: {
    display: "flex",
    flexDirection: "row",
  },

  rankItem: {
    width: 25,
    height: "auto",
    textAlign: "center",
    backgroundColor: "#ccc6c6",
    borderRadius: 6,
    overflow: "hidden",
    color: "#747171",
  },

  nameSymbol: {
    left: 10,
  },

  name: {
    color: "#000000",
    textAlign: "left",
  },
  symbol: {
    color: "#b6b6b6",
    position: "relative",
    left: 5,
  },

  current: {
    left: -50,
    width: 100,
    textAlign: "right",
  },

  currentPrice: {
    textAlign: "right",
    fontWeight: "600",
  },

  priceChange: {
    textAlign: "right",
  },
});

export default styleList;
