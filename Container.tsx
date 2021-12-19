import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import Login from "./components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/core";
import { ParamListBase } from "@react-navigation/routers";
import WrappBottomTabs from "./components/Content";
import { CombinedState } from "redux";
import { IAuth } from "./redux/authentication/authSlice";
import { useReduxSelector } from "./redux/hooks";

const Stack = createNativeStackNavigator();

function Container(): ReactElement {
  const { isAuth } = useReduxSelector(
    (state: CombinedState<{ auth: IAuth }>) => state.auth
  );
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props: {
              route: RouteProp<ParamListBase, "Login">;
              navigation: any;
            }) => <Login {...props} isAuth={isAuth} />}
          </Stack.Screen>
          <Stack.Screen
            name="WrappBottomTabs"
            component={WrappBottomTabs}
            options={{ headerShown: false }}
          />
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
