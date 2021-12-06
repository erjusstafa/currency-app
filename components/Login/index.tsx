import {
  Button,
  Image,
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  ImageBackground,
  View,
} from "react-native";
import React, { useState, ReactElement } from "react";
import { useReduxDispatch } from "../../redux/store";
import styleLogin from "./style";
import { LogInOut } from "../../redux/authentication/authSlice";
import Icon from "react-native-vector-icons/FontAwesome";

interface ILogin {
  isAuth: boolean;
  navigation: any;
}

interface ITextFields {
  name: string;
  email: string;
  password: string;
}
const Login = ({ isAuth, navigation }: ILogin): ReactElement => {
  const dispatch = useReduxDispatch();
  /*   const { height } = useWindowDimensions();*/

  const [value, setValue] = useState<ITextFields>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (isAuth === false) {
      if (value.name.trim() && value.password.trim() && value.email.trim()) {
        dispatch(dispatch(LogInOut(true)));
        navigation.navigate("Home");
      } else {
        return;
      }
    } else {
      dispatch(dispatch(LogInOut(false)));
    }
  };

  return (
    <View style={styleLogin.container}>
      <ImageBackground
        source={require("../../assets/crypto1.jpg")}
        resizeMode="cover"
        style={styleLogin.backgroundImage}
      />
      <View style={styleLogin.text}>
        <View style={styleLogin.logoWrapper}>
          <Image
            source={require("../../assets/logo.png")}
            style={styleLogin.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styleLogin.inputs}>
          <View>
            <TextInput
              placeholder="name"
              style={styleLogin.inputsItems}
              value={value.name}
              onChangeText={(e: string) => setValue({ ...value, name: e })}
            />
            <Text>{error}</Text>
            <Icon
              name={"user"}
              size={30}
              color="#429be4"
              style={styleLogin.icon}
            />
          </View>

          <View>
            <TextInput
              placeholder="email"
              style={[styleLogin.inputsItems]}
              value={value.email}
              onChangeText={(e: string) => setValue({ ...value, email: e })}
            />

            <Icon
              name={"envelope"}
              size={30}
              color="#429be4"
              style={[styleLogin.icon]}
            />
          </View>

          <View>
            <TextInput
              placeholder="password"
              style={styleLogin.inputsItems}
              value={value.password}
              secureTextEntry={true}
              autoCorrect={true}
              onChangeText={(e: string) => setValue({ ...value, password: e })}
            />

            <Icon
              name={"lock"}
              size={30}
              color="#429be4"
              style={styleLogin.icon}
            />
          </View>

          {/*    {isAuth === false ? ( */}
          <Pressable style={styleLogin.button} onPress={handleLogin}>
            <Text style={styleLogin.buttonTxt}>Log In</Text>
          </Pressable>
          {/* ) : (
            <Pressable style={styleLogin.button} onPress={handleLogin}>
              <Text style={styleLogin.buttonTxt}>Log Out</Text>
            </Pressable>
          )} */}
        </View>
      </View>
    </View>
  );
};

export default Login;
