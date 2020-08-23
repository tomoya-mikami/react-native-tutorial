import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Camera from "./Component/Camera/Container";

const mainStyle = (
  <View style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#fff",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          console.log("pushed1");
        }}
      >
        <Ionicons
          name="ios-camera"
          style={{ alignSelf: "center", alignItems: "center" }}
          size={48}
          color="#000"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#fff",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => this.props.navigation.navigate("InvoiceEdit")}
      >
        <Ionicons
          name="ios-map"
          style={{ alignSelf: "center", alignItems: "center" }}
          size={48}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  </View>
);

const App = (): React.ReactElement => {
  return mainStyle;
};

export default App;
