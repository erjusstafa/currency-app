import { useRoute } from "@react-navigation/native";
import React, { Fragment, PropsWithChildren, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BG_WHITE,
  GRAY_COLOR,
  OTHER_COLOR,
  PRICE_COLOR,
  WHITE_COLOR,
} from "../../constants";
import { getHomeFetch, IHomeData } from "../../redux/home/homeSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import styleList from "../ListData/style";
import styleListItem from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { EmptyObject } from "redux";
import {
  decrementBasket,
  getChartFetch,
  incrementBasket,
} from "../../redux/chart/chartSlice";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import Tabs from "../Tabs";
import Loading from "../Loading";

interface IRoute {
  route: any;
}

const ListItem: React.FC<IRoute> = ({ route }: PropsWithChildren<IRoute>) => {
  const dispatch = useReduxDispatch();
  const dataChart = useReduxSelector((state) => state.chart.chartApi);

  const { item } = route.params;
  const { isLoading, search } = useReduxSelector(
    (state: EmptyObject & { home: IHomeData }) => state.home
  );

  useEffect(() => {
    dispatch(getHomeFetch(item.id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getChartFetch(item.id));
  }, [dispatch]);

  const [chartPrice, setChartPrice] = useState(dataChart);
  /* 
  console.log("chartPrice.price", chartPrice.price);
  console.log("dataChart", dataChart);

  const dataPrice = Object.values(chartPrice || []).map((item: unknown) => {
    return item;
  }); */

  return (
    <View style={styleListItem.containerListItem}>
      {isLoading ? (
        <Loading title="Please Wait..." />
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
                  {item.current_price.toLocaleString()}
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

          {/**chart */}

          <ScrollView>
            <LineChart
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={Dimensions.get("window").width / 1.1} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={chartConfig}
              style={{
                margin: 10,
                borderRadius: 25,
              }}
              bezier
            />

            <Tabs />
          </ScrollView>
          {/**close Chart */}

          <View style={styleListItem.BottomButton}>
            <TouchableOpacity
              style={styleListItem.ButtonBuy}
              onPress={() => dispatch(incrementBasket())}
            >
              <Text style={{ color: WHITE_COLOR, fontWeight: "600" }}>BYU</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styleListItem.ButtonSell}
              onPress={() => dispatch(decrementBasket())}
            >
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

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity: number = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity: number = 1) => `rgba(1, 1, 1, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  fillShadowGradient: "#98c1e9",
  fillShadowGradientOpacity: 1,
  propsForDots: {
    r: "4",
    strokeWidth: "2",
    stroke: OTHER_COLOR,
  },
};
