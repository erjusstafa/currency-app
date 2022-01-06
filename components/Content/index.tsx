import React, { Fragment, ReactElement } from "react";
import { Text, View } from "react-native";
import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "../../routes/Home";
import About from "../../routes/About";
import Icon from "react-native-vector-icons/FontAwesome";
import Logout from "../../routes/Logout";
import { LEYLA_COLOR, OTHER_COLOR, WHITE_COLOR } from "../../constants";
import { Avatar } from "react-native-elements";

const BottomTab = createBottomTabNavigator();
function WrappBottomTabs(): ReactElement {
  return (
    <Fragment>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "red ",
              paddingVertical: 60,
              height: 600,
            },
            header: () => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignSelf: "center",
                  justifyContent: "space-around",
                  alignItems: "center",
                  paddingVertical: 60,
                  backgroundColor: LEYLA_COLOR,
                }}
              >
                <View>
                  <Text style={{ color: OTHER_COLOR }}>Welcome</Text>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 23,
                      color: WHITE_COLOR,
                    }}
                  >
                    Erjus Stafa
                  </Text>
                </View>
                <View>
                  <Avatar
                    rounded
                    source={require("../../assets/images/clever.jpg")}
                    size="medium"
                  />
                </View>
              </View>
            ),

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
                }}
              >
                <Icon
                  name={"bolt"}
                  size={30}
                  color="#429be4"
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    alignContent: "center",
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
            title: "Logout",
            headerStyle: {
              paddingVertical: 60,
              height: 600,
              backgroundColor: LEYLA_COLOR,
            },

            header: () => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignSelf: "center",
                  justifyContent: "space-around",
                  alignItems: "center",
                  paddingVertical: 60,
                  backgroundColor: LEYLA_COLOR,
                }}
              >
                <View>
                  <Text style={{ color: OTHER_COLOR }}>Goodbye</Text>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 23,
                      color: WHITE_COLOR,
                    }}
                  >
                    Erjus Stafa
                  </Text>
                </View>
                <View>
                  <Avatar
                    rounded
                    source={require("../../assets/images/clever.jpg")}
                    size="medium"
                  />
                </View>
              </View>
            ),

            tabBarIcon: () => (
              <View>
                <Icon name={"user"} size={30} color="#429be4" />
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </Fragment>
  );
}
export default WrappBottomTabs;
