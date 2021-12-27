import React, { PropsWithChildren } from "react";
import { Image, Pressable, Text, View } from "react-native";

import styleList from "./style";

interface IItem {
  item: any & {};
  navigation: any;
}

const ListData: React.FC<IItem> = ({
  item,
  navigation,
}: PropsWithChildren<IItem>) => {
  console.log("item", typeof item);

  return (
    <Pressable
      onPress={() => navigation.navigate("ItemDetails", { payload: item })}
    >
      <View key={item.price_change_24h} style={styleList.data}>
        <Image source={{ uri: item.image.small }} style={styleList.images} />
        <View style={styleList.description}>
          <View style={styleList.nameSymbol}>
            <Text style={styleList.name}>{item.name}</Text>
            <Text style={styleList.symbol}>{item.symbol}</Text>
          </View>
          <View style={styleList.current}>
            <Text style={styleList.currentPrice}>
              {item.market_data.current_price.aed}
            </Text>
            <Text
              style={[
                styleList.priceChange,
                {
                  color:
                    item.market_data.price_change_percentage_1h_in_currency
                      .aed >= 0
                      ? "green"
                      : "red",
                },
              ]}
            >
              {item.market_data.price_change_percentage_1h_in_currency.aed > 0
                ? "+" +
                  item.market_data.price_change_percentage_1h_in_currency.aed
                : item.market_data.price_change_percentage_1h_in_currency.aed}
              %
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ListData;
