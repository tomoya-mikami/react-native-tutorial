import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Camera from "./Component/Camera/Container";
import Photo from "./Component/Photo/Container";

const Tab = createBottomTabNavigator();

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Camera">
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Photo" component={Photo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
