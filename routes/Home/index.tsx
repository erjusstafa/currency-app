import React, { ReactElement, Suspense, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { EmptyObject } from "redux";
import { IAuth } from "../../redux/authentication/authSlice";
import { getHomeFetch, IHomeData } from "../../redux/home/homeSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import styleLogout from "../Logout/style";
import styleHome from "./style";

function Home(): ReactElement {
  const dispatch = useReduxDispatch();
  const isAuth = useReduxSelector(
    (state: EmptyObject & { auth: IAuth }) => state.auth.isAuth
  );
  const data = useReduxSelector(
    (state: EmptyObject & { home: IHomeData }) => state.home.homeApi
  );
  const load = useReduxSelector(
    (state: EmptyObject & { home: IHomeData }) => state.home.isLoading
  );

  useEffect(() => {
    dispatch(getHomeFetch());
  }, [dispatch]);

  return (
    <ScrollView style={styleHome.container}>
      <Text>Home</Text>
      <View>
        {Object.values(data || []).map((item: any) => {
          console.log("item, ", item);

          return (
            <View key={item.id}>
              <View>
                <Image source={{ uri: item.image }} style={styleHome.images} />
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.symbol}</Text>
                </View>
              </View>
              <View></View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Home;
