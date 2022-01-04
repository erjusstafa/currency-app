import React, { ReactNode } from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import styleLogout from "./style";
import { Avatar } from "react-native-elements";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { LogInOut } from "../../redux/authentication/authSlice";

const Logout: React.FC = ({ navigation }: any) => {
  const dispatch = useReduxDispatch();
  const { name } = useReduxSelector((state) => state.auth.userData);
  const handleLogOut = () => {
    dispatch(LogInOut(false));
    navigation.navigate("Login");
  };
  return (
    <View style={styleLogout.logoutWrapp}>
      <Avatar
        rounded
        source={require("../../assets/images/clever.jpg")}
        size="large"
        containerStyle={styleLogout.avatar}
      />
      <Text>{name}</Text>
      <TouchableOpacity
        onPress={() => handleLogOut()}
        style={styleLogout.buttonLogout}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
