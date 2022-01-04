import React, { Fragment, ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/core";
import { ParamListBase } from "@react-navigation/routers";
import WrappBottomTabs from "./components/Content";
import { CombinedState } from "redux";
import { IAuth } from "./redux/authentication/authSlice";
import { useReduxSelector } from "./redux/hooks";
import ListItem from "./routes/ListItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { incrementBasket } from "./redux/chart/chartSlice";
import { LEYLA_COLOR } from "./constants";

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
          <Stack.Screen
            options={{
              title: "Detail",
              headerRight: (props) => <Right {...props} />,
              headerLeft: (props) => <Left {...props} />,
            }}
            name="ItemDetails"
            component={ListItem}
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

function Right(): ReactElement {
  const { basket } = useReduxSelector((state) => state.chart);
  return (
    <Fragment>
      <View>
        <Icon
          name={"shopping-basket"}
          size={20}
          color="#429be4"
          style={{ position: "relative" }}
        />
        <Text
          style={{
            position: "absolute",
            right: -7,
            top: -10,
            color: LEYLA_COLOR,
          }}
        >
          {basket}
        </Text>
      </View>
    </Fragment>
  );
}

function Left(): ReactElement {
  return <Icon name={"angle-left"} size={30} color="#429be4" />;
}
