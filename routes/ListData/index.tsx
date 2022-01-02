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
        <Image source={{ uri: item.image }} style={styleList.images} />
        <View style={styleList.description}>
          <View style={styleList.nameSymbol}>
            <Text style={styleList.name}>{item.name}</Text>
            <View style={styleList.rank}>
              <Text style={styleList.rankItem}>{item.market_cap_rank}</Text>
              <Text style={styleList.symbol}>{item.symbol.toUpperCase()}</Text>
            </View>
          </View>
          <View style={styleList.current}>
            <Text style={styleList.currentPrice}>
              {" "}
              {"$"}
              {item.current_price.toFixed(2)}
            </Text>
            <Text
              style={[
                styleList.priceChange,
                {
                  color:
                    item.market_cap_change_percentage_24h >= 0
                      ? "green"
                      : "red",
                },
              ]}
            >
              {item.market_cap_change_percentage_24h > 0
                ? "+" + item.market_cap_change_percentage_24h.toFixed(2)
                : item.market_cap_change_percentage_24h.toFixed(2)}
              %
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ListData;
