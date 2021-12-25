import React, { ReactElement, Suspense, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from "react-native";
import { EmptyObject } from "redux";
import styleLogin from "../../components/Login/style";
import { IAuth } from "../../redux/authentication/authSlice";
import { getHomeFetch, IHomeData } from "../../redux/home/homeSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import List from "../List";
import styleHome from "./style";

interface INavigation {
  navigation: any;
}

function Home({ navigation }: INavigation): ReactElement {
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
  const [masterDataSource, setMasterDataSource] = useState(data);
  const [colorPrice, setColorPrice] = useState<string>("");

  useEffect(() => {
    dispatch(getHomeFetch());
  }, [dispatch]);

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
        data={data}
        keyExtractor={(item: any, index: number) => index.toString()}
        renderItem={({ item }: ListRenderItemInfo<any>) => {
          return <List item={item} />;
        }}
      />
    </View>
  );
}
export default Home;
