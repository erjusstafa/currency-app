import {
  Image,
  Pressable,
  Text,
  TextInput,
  ImageBackground,
  View,
} from "react-native";
import React, { useState, ReactElement } from "react";
import styleLogin from "./style";
import { ICredenticial, LogInOut } from "../../redux/authentication/authSlice";
import Icon from "react-native-vector-icons/FontAwesome";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";

interface ILogin {
  isAuth: boolean;
  navigation: any;
}

const Login = ({ isAuth, navigation }: ILogin): ReactElement => {
  const dispatch = useReduxDispatch();
  const { email, password, errorName, errorEmail, errorPassword } =
    useReduxSelector((state) => state.auth.userData);

  const myname = useReduxSelector((state) => state.auth.userData.name);

  const [toggleSign, setToggleSign] = useState<boolean>(true);
  const [value, setValue] = useState<ICredenticial>({
    name: myname,
    email: email,
    password: password,
    errorName: errorName,
    errorEmail: errorEmail,
    errorPassword: errorPassword,
  });

  const handleToggleSign = () => {
    setToggleSign(!toggleSign);
  };

  const handleLogin = () => {
    if (isAuth === false) {
      if ((value.name.trim() && value.password.trim()) || value.email.trim()) {
        dispatch(dispatch(LogInOut(true)));
        navigation.navigate("WrappBottomTabs");
      }
    } else {
      dispatch(dispatch(LogInOut(false)));
    }
  };

  const emailValidator = (event: string) => {
    let reg: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!reg.test(event)) {
      setValue({
        ...value,
        errorEmail: "Please enter a valid email address",
        email: event,
      });
    } else {
      setValue({ ...value, email: event, errorEmail: "" });
    }
  };

  const nameValidatin = (event: string): void => {
    if (value.name.length < 8) {
      setValue({
        ...value,
        errorName: "Please insert 8 char or more!",
        name: event,
      });
    } else {
      setValue({
        ...value,
        errorName: "",
        name: event,
      });
    }
  };

  const passValidatin = (event: string): void => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (value.password.match(letterNumber)) {
      setValue({
        ...value,
        errorPassword: "",
        password: event,
      });
    } else {
      setValue({
        ...value,
        errorPassword: "Must contains letter and number",
        password: event,
      });
    }
  };

  const LoginRegister = () => {};
  return (
    <View style={styleLogin.container}>
      <ImageBackground
        source={require("../../assets/images/crypto1.jpg")}
        resizeMode="cover"
        style={styleLogin.backgroundImage}
      />
      <View style={styleLogin.text}>
        <View style={styleLogin.logoWrapper}>
          <Image
            source={require("../../assets/images/logo.png")}
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
              onChangeText={(event: string) => nameValidatin(event)}
            />
            <Icon
              name={"user"}
              size={30}
              color="#429be4"
              style={styleLogin.icon}
            />
            <Text style={styleLogin.errorText}>{value.errorName}</Text>
          </View>

          {!toggleSign ? (
            <View>
              <TextInput
                placeholder="email"
                style={styleLogin.inputsItems}
                value={value.email}
                onChangeText={(event: string) => emailValidator(event)}
              />

              <Icon
                name={"envelope"}
                size={30}
                color="#429be4"
                style={styleLogin.icon}
              />
              <Text style={styleLogin.errorText}>{value.errorEmail}</Text>
            </View>
          ) : null}

          <View>
            <TextInput
              placeholder="password"
              style={styleLogin.inputsItems}
              value={value.password}
              secureTextEntry={true}
              autoCorrect={true}
              onChangeText={(event: string) => passValidatin(event)}
            />

            <Icon
              name={"lock"}
              size={30}
              color="#429be4"
              style={styleLogin.icon}
            />

            <Text style={styleLogin.errorText}>{value.errorPassword}</Text>
          </View>

          {toggleSign ? (
            <Pressable style={styleLogin.button} onPress={handleLogin}>
              <Text style={styleLogin.buttonTxt}>Log In</Text>
            </Pressable>
          ) : (
            <Pressable style={styleLogin.button} onPress={handleLogin}>
              <Text style={styleLogin.buttonTxt}>Register</Text>
            </Pressable>
          )}
          <Text onPress={handleToggleSign} style={styleLogin.wrappHaveAcc}>
            {toggleSign ? (
              <Text style={styleLogin.haveAcc}> Don't have an account?</Text>
            ) : (
              <Text style={styleLogin.haveAcc}> Back to</Text>
            )}
            {toggleSign ? "Register" : "Log In"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
