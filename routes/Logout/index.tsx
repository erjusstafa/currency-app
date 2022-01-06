import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styleLogout from "./style";
import { Avatar } from "react-native-elements";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { LogInOut } from "../../redux/authentication/authSlice";
import { WHITE_COLOR } from "../../constants";

const Logout: React.FC = ({ navigation }: any) => {
  const dispatch = useReduxDispatch();
  const { name } = useReduxSelector((state: any) => state.auth.userData);
  const handleLogOut = () => {
    dispatch(LogInOut(false));
    navigation.navigate("Login");
  };
  return (
    <View style={styleLogout.logoutContainer}>
      <View style={styleLogout.logoutWrapp}>
        <Text style={styleLogout.textOne}>
          Started to Discover New Currency
        </Text>
        <Text style={styleLogout.textThree}>
          Cryptocurrency wallets are hardware or software wallets that anyone
          can use for storing their cryptocurrencies.
        </Text>

        <TouchableOpacity
          onPress={() => handleLogOut()}
          style={styleLogout.buttonLogout}
        >
          <Text style={{ color: WHITE_COLOR }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logout;
