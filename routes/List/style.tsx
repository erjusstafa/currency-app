import { StyleSheet } from "react-native";

const styleList = StyleSheet.create({
  data: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
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

  nameSymbol: {
    left: 10,
  },

  name: {
    color: "#000000",
    textAlign: "left",
  },
  symbol: {
    color: "#b6b6b6",
    textAlign: "left",
  },

  current: {
    left: -50,
    width: 100,
    textAlign: "right",
  },

  currentPrice: {
    textAlign: "right",
  },

  priceChange: {
    textAlign: "right",
  },
});

export default styleList;
