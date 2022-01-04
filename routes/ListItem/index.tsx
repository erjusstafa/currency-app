import { useRoute } from "@react-navigation/native";
import React, { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GRAY_COLOR, WHITE_COLOR } from "../../constants";
import { getHomeFetch, IHomeData } from "../../redux/home/homeSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import styleList from "../ListData/style";
import styleListItem from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { EmptyObject } from "redux";

interface IRoute {
  route: any;
}

const ListItem: React.FC<IRoute> = ({ route }: PropsWithChildren<IRoute>) => {
  const { item } = route.params;

  const dispatch = useReduxDispatch();

  const { isLoading, search } = useReduxSelector(
    (state: EmptyObject & { home: IHomeData }) => state.home
  );

  useEffect(() => {
    dispatch(getHomeFetch(item.id));
  }, [dispatch]);

  console.log("log", item.id);

  return (
    <View style={styleListItem.containerListItem}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Fragment>
          <View style={styleListItem.introItem}>
            <Image source={{ uri: item.image }} style={styleList.images} />
            <View style={styleListItem.details}>
              <Text style={styleListItem.detailsName}>
                {item.name} / {item.symbol.toUpperCase()}
              </Text>
              <View style={styleListItem.priceDetails}>
                <Text style={{ color: GRAY_COLOR, fontSize: 14 }}>$</Text>
                <Text style={styleListItem.currentPrice}>
                  {item.current_price}
                </Text>
                <View style={styleListItem.suffixPriceDetails}>
                  <Icon
                    name={`sort-${
                      item.market_cap_change_percentage_24h < 0 ? "down" : "up"
                    }`}
                    size={14}
                    color={WHITE_COLOR}
                  />
                  <Text
                    style={{
                      color: WHITE_COLOR,
                      fontSize: 12,
                      marginHorizontal: 4,
                    }}
                  >
                    {item.market_cap_change_percentage_24h.toFixed(2)}%
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styleListItem.BottomButton}>
            <TouchableOpacity style={styleListItem.ButtonBuy}>
              <Text style={{ color: WHITE_COLOR, fontWeight: "600" }}>BYU</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleListItem.ButtonSell}>
              <Text style={{ color: WHITE_COLOR, fontWeight: "600" }}>
                SELL
              </Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      )}
    </View>
  );
};

export default ListItem;
