import React, { ReactElement, Suspense, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { EmptyObject } from "redux";
import styleLogin from "../../components/Login/style";
import { IAuth } from "../../redux/authentication/authSlice";
import { getHomeFetch, IHomeData } from "../../redux/home/homeSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import ListData from "../ListData";
import styleHome from "./style";

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
  const [colorPrice, setColorPrice] = useState<string>("");

  useEffect(() => {
    dispatch(getHomeFetch(""));
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

  return (
    <View style={styleHome.container}>
      <View style={styleHome.wrapp}>
        <TextInput
          placeholder="name"
          style={styleLogin.inputsItems}
          value={searchval}
          onChangeText={(text: string) => searchFilterFunction(text)}
        />
      </View>
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item: any, index: number) => index.toString()}
        renderItem={({ item }: ListRenderItemInfo<any>) => {
          return <ListData item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
}
export default Home;
