import React, { ReactElement } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Login from "./components/Login";
import { useReduxSelector } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

function Container(): ReactElement {
  const { isAuth } = useReduxSelector((state) => state.auth);
  return (
    <>
      {/*  <View style={styles.container}>
        <ImageBackground
          source={require("./assets/crypto1.jpg")}
          resizeMode="cover"
          style={styles.backgroundImage}
        />

        <Login isAuth={isAuth} />
        <StatusBar style="auto" />
      </View> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {(props) => <Login {...props} isAuth={isAuth} />}
          </Stack.Screen>
          <Stack.Screen name="Home">
            {(props) => <Home {...props} isAuth={isAuth} />}
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
    backgroundColor: "red",
  },
  backgroundImage: {
    height: "100%",
    position: "relative",
    top: "0%",
  },
});
