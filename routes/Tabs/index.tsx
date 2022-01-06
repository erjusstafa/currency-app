import React, { Fragment, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styleTabs from "./style";

const Tabs: React.FC = () => {
  const [tab, setTab] = useState<string>("24h");

  const handleTabs = (item: string) => {
    setTab(item);
  };
  return (
    <Fragment>
      <View style={styleTabs.tabs}>
        <TouchableOpacity
          style={styleTabs.tabsItem}
          onPress={() => handleTabs("24H")}
        >
          <Text>24H</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleTabs.tabsItem}
          onPress={() => handleTabs("1M")}
        >
          <Text>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleTabs.tabsItem}
          onPress={() => handleTabs("1Y")}
        >
          <Text>1Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleTabs.tabsItem}
          onPress={() => handleTabs("All")}
        >
          <Text>All</Text>
        </TouchableOpacity>
      </View>
      {/*  <Text style={{ textAlign: "center", position: "relative", top: -10 }}>
        {tab == "24H"
          ? "24 HOUR"
          : tab == "1M"
          ? "1 Month"
          : tab == "1Y"
          ? "1years"
          : "All"}
      </Text> */}
    </Fragment>
  );
};

export default Tabs;
