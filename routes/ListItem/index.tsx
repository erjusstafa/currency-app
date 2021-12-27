import { useRoute } from "@react-navigation/native";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useReduxDispatch } from "../../redux/hooks";

interface IRoute {
  route: any;
}

const ListItem: React.FC<IRoute> = ({ route }: PropsWithChildren<IRoute>) => {
  const { payload } = route.params;

  return (
    <View>
      <Text>{payload.name}</Text>
      <Text>{payload.symbol}</Text>
    </View>
  );
};

export default ListItem;
