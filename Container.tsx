import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import Login from "./components/Login";
import { useReduxSelector } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/core";
import { ParamListBase } from "@react-navigation/routers";
import Home from "./components/Home";
import { CombinedState } from "redux";
import { IAuth } from "./redux/authentication/authSlice";

const Stack = createNativeStackNavigator();

function Container(): ReactElement {
  const { isAuth } = useReduxSelector(
    (state: CombinedState<{ auth: IAuth }>) => state.auth
  );
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {(props: {
              route: RouteProp<ParamListBase, "Login">;
              navigation: any;
            }) => <Login {...props} isAuth={isAuth} />}
          </Stack.Screen>
          <Stack.Screen name="Home">
            {(props: {
              route: RouteProp<ParamListBase, "Home">;
              navigation: any;
            }) => <Home {...props} isAuth={isAuth} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Container;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: "100%",
    position: "relative",
    top: "0%",
  },
});
