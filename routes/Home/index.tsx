import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import styleHome from "./style";

function Home(): ReactElement {
  return (
    <View style={styleHome.container}>
      <Text>Home</Text>
    </View>
  );
}

export default Home;
