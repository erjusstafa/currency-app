import { StyleSheet } from "react-native";

const styleLogout = StyleSheet.create({
  logoutWrapp: {
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    marginVertical: 30,
  },

  buttonLogout: {
    borderWidth: 1,
    borderColor: "#429be4",
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
});

export default styleLogout;
