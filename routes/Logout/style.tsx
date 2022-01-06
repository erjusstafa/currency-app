import { StyleSheet } from "react-native";
import {
  BORDER_COLOR,
  LEYLA_COLOR,
  OTHER_COLOR,
  WHITE_COLOR,
} from "../../constants";

const styleLogout = StyleSheet.create({
  logoutContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: LEYLA_COLOR,
  },
  logoutWrapp: {
    width: "90%",
    height: 300,
    borderRadius: 17,
    display: "flex",
    alignSelf: "center",
    marginTop: 80,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: WHITE_COLOR,
  },

  buttonLogout: {
    borderWidth: 1,
    borderRadius: 26,
    borderColor: BORDER_COLOR,
    paddingHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: OTHER_COLOR,
    margin: 20,
  },
  textOne: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },

  textThree: {
    textAlign: "center",
    color: "gray",
    fontSize: 14,
  },
});

export default styleLogout;
