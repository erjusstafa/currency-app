import React, {
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { EmptyObject } from "redux";
import { IAuth } from "../../redux/authentication/authSlice";
import { getHomeFetch, IHomeData } from "../../redux/home/homeSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import ListData from "../ListData";
import styleHome from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

interface Inavigation {
  navigation: any;
}

function Home({ navigation }: Inavigation): ReactElement {
  const dispatch = useReduxDispatch();

  const isAuth = useReduxSelector(
    (state: EmptyObject & { auth: IAuth }) => state.auth.isAuth
  );
  const data = useReduxSelector(
    (state: EmptyObject & { home: IHomeData }) => state.home.homeApi
  );
  const { isLoading, search } = useReduxSelector(
    (state: EmptyObject & { home: IHomeData }) => state.home
  );

  const [searchval, setSearch] = useState<string>("");
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [tab, setTab] = useState<string>("24h");

  useEffect(() => {
    dispatch(getHomeFetch("usd"));
  }, [dispatch]);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = filteredDataSource.filter(function (item: any) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(filteredDataSource);
      setSearch(text);
    }
  };

  const handleTabs = (item: string) => {
    setTab(item);
  };

  return (
    <View style={styleHome.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Fragment>
          <View style={styleHome.wrapp}>
            <TextInput
              placeholder="Search..."
              style={styleHome.inputsItems}
              value={searchval}
              onChangeText={(text: string) => searchFilterFunction(text)}
            />
            <Icon name={"search"} size={20} style={styleHome.icon} />
          </View>

          <View style={styleHome.containerListItem}>
            <View style={styleHome.introItem}>
              <Text>.name</Text>
              <Text>payload.symbol</Text>
            </View>
          </View>
          {/*  <View style={styleHome.tabs}>
        <TouchableOpacity
          style={styleHome.tabsItem}
          onPress={() => handleTabs("24H")}
        >
          <Text>1 Hour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleHome.tabsItem}
          onPress={() => handleTabs("12H")}
        >
          <Text>2 Hour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleHome.tabsItem}
          onPress={() => handleTabs("3H")}
        >
          <Text>3 Hour</Text>
        </TouchableOpacity>
      </View>
      <Text>
        {tab == "24H" ? "24 HOUR" : tab == "12H" ? "12 HOUR" : "3 HOUR"}
      </Text> */}
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item: any, index: number) => index.toString()}
            renderItem={({ item }: ListRenderItemInfo<any>) => {
              return <ListData item={item} navigation={navigation} />;
            }}
          />
        </Fragment>
      )}
    </View>
  );
}
export default Home;
