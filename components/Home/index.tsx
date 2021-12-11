import React, { ReactElement } from "react";
import { View, Text, Pressable, Button } from "react-native";
import styleLogin from "../Login/style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../routes/Home";
import About from "../../routes/About";
import Icon from "react-native-vector-icons/FontAwesome";

const BottomTab = createBottomTabNavigator();
function WrappBottomTabs(): ReactElement {
  return (
    <>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <View>
                <Icon name={"home"} size={30} color="#429be4" />
              </View>
            ),
          }}
        />

        <BottomTab.Screen name="About" component={About} />
      </BottomTab.Navigator>
    </>
  );
}
export default WrappBottomTabs;
