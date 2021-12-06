import React, { ReactElement } from "react";
import { View, Text, Pressable, Button } from "react-native";
import styleLogin from "../Login/style";

interface IBut {
  navigation: any;
  isAuth: boolean;
}
function Home({ isAuth, navigation }: IBut): ReactElement {
  return (
    <View>
      {isAuth === true && <Text>you are log In</Text>}

      <Pressable
        style={styleLogin.button}
        onPress={() => navigation.navigate("Login", { pinxho: "Plako" })}
      >
        <Text>Go back</Text>
      </Pressable>
      <Button filled="red" title="z7"/>
    </View>
  );
}
export default Home;
