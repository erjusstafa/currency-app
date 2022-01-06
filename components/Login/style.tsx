import { StyleSheet } from "react-native";
import { LEYLA_COLOR, OTHER_COLOR, WHITE_COLOR } from "../../constants";

const styleLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LEYLA_COLOR,
  },
  backgroundImage: {
    height: "100%",
    position: "relative",
    top: "0%",
  },

  circle: {},
  text: {
    alignSelf: "center",
    alignItems: "center",
    height: "70%",
    borderRadius: 50,
    backgroundColor: WHITE_COLOR,
    width: "90%",
    position: "absolute",
    top: "24%",
  },
  inputs: {
    minWidth: "90%",
    paddingHorizontal: 20,
    marginVertical: 80,
    borderRadius: 5,
  },
  inputsItems: {
    backgroundColor: "#fbfbfb",
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: "#f6f5f5",
  },
  logoWrapper: {
    height: 50,
    width: 200,
    position: "relative",
  },
  logo: {
    width: "100%",
    position: "absolute",
    top: -180,
  },
  icon: {
    color: OTHER_COLOR,
    backgroundColor: "transparent",
    position: "absolute",
    top: 15,
    width: 50,
    fontSize: 20,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 8,
    marginVertical: 30,
    backgroundColor: OTHER_COLOR,
    position: "relative",
    top: -20,
  },
  errorText: {
    color: "red",
    paddingLeft: 10,
    paddingVertical: 7,
    marginTop: -10,
    fontSize: 10,
  },
  buttonTxt: {
    color: "white",
    fontSize: 15,
  },
  wrappHaveAcc: {
    position: "relative",
    top: -20,
    color: OTHER_COLOR,
    textAlign: "center",
  },
  haveAcc: {
    color: "#999a9b",
    paddingHorizontal: 10,
  },
});

export default styleLogin;
