import React, { PropsWithChildren } from "react";
import { Image, Text, View } from "react-native";
import styleList from "./style";

interface IItem {
  item: any;
}

const List: React.FC<IItem> = ({ item }: PropsWithChildren<IItem>) => {
  return (
    <View key={item.price_change_24h} style={styleList.data}>
      <Image source={{ uri: item.image }} style={styleList.images} />
      <View style={styleList.description}>
        <View style={styleList.nameSymbol}>
          <Text style={styleList.name}>{item.name}</Text>
          <Text style={styleList.symbol}>{item.symbol}</Text>
        </View>
        <View style={styleList.current}>
          <Text style={styleList.currentPrice}>
            {item.current_price.toFixed(4)}
          </Text>
          <Text
            style={[
              styleList.priceChange,
              { color: item.price_change_24h >= 0 ? "green" : "red" },
            ]}
          >
            {item.price_change_24h > 0
              ? "+" + item.price_change_24h.toFixed(2)
              : item.price_change_24h.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default List;
