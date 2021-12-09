import { StyleSheet } from "react-native";

const styleLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  backgroundImage: {
    height: "100%",
    position: "relative",
    top: "0%",
  },
  text: {
    color: "#074427",
    alignItems: "center",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "white",
    minWidth: "100%",
    position: "absolute",
    top: "18%",
  },
  inputs: {
    minWidth: "90%",
    paddingHorizontal: 20,
    marginVertical: 80,
    borderRadius: 5,
  },
  inputsItems: {
    backgroundColor: "#fbfbfb",
    padding: 15,
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
    backgroundColor: "transparent",
    position: "absolute",
    top: 15,
    width: 50,
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
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 8,
    marginVertical: 30,
    backgroundColor: "#429be4",
  },
  buttonTxt: {
    color: "white",
    fontSize: 15,
  },
  wrappHaveAcc: {
    color: "#429be4",
    textAlign: "center",
  },
  haveAcc: {
    color: "#999a9b",
    paddingHorizontal: 10,
  },
});

export default styleLogin;
