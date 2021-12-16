import React, { ReactElement } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../routes/Home";
import About from "../../routes/About";
import Icon from "react-native-vector-icons/FontAwesome";
import styleHomeRoute from "./style";
import Logout from "../../routes/Logout";

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
        <BottomTab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "green",
                  position: "absolute",
                  top: -25,
                  shadowColor: "#171717",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                }}
              >
                <Icon
                  name={"plus"}
                  size={30}
                  color="#429be4"
                  style={{
                    textAlign: "center",
                    marginVertical: 0,
                    alignItems: "center",
                    alignContent: "center",
                    marginTop: 10,
                  }}
                />
              </View>
            ),
          }}
        />

        <BottomTab.Screen
          name="Logout"
          component={Logout}
          options={{
            tabBarIcon: () => (
              <View>
                <Icon name={"user"} size={30} color="#429be4" />
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}
export default WrappBottomTabs;
