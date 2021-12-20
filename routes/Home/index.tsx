import React, { ReactElement, Suspense, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { EmptyObject } from "redux";
import styleLogin from "../../components/Login/style";
import { IAuth } from "../../redux/authentication/authSlice";
import { getHomeFetch, IHomeData } from "../../redux/home/homeSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import styleHome from "./style";

function Home(): ReactElement {
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
  const [filteredDataSource, setFilteredDataSource] = useState<any[]>([]);
  const [masterDataSource, setMasterDataSource] = useState<any[]>(data);

  const searchFilterFunction = (text: any) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  useEffect(() => {
    dispatch(getHomeFetch());
  }, [dispatch]);

  return (
    <ScrollView style={styleHome.container}>
      <View style={styleHome.wrapp}>
        <TextInput
          placeholder="name"
          style={styleLogin.inputsItems}
          value={searchval}
          onChangeText={(text: string) => searchFilterFunction(text)}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: ListRenderItemInfo<any>) => (
          <View key={item.id} style={styleHome.data}>
            <Image source={{ uri: item.image }} style={styleHome.images} />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.symbol}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

export default Home;
