import React, { ReactElement } from "react";
import { Text, View } from "react-native";
import styleLoading from "./style";

interface ITitleLoading {
  title: string;
}

function Loading({ title }: ITitleLoading): ReactElement {
  return (
    <View style={styleLoading.containerLoading}>
      <Text style={styleLoading.title}>{title}</Text>
    </View>
  );
}

export default Loading;
