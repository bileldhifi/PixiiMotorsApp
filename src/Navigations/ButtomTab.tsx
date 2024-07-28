import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import HomeStack from "./HomeStack";
import MapStack from "./MapStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/colors";
import { moderateScale } from "../Utils/Metrics";

const Tab = createBottomTabNavigator();

export default class ButtomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#e91e63",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={Colors.inactiveTab}
              size={moderateScale(30)}
            />
          ),
        }} 
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Map" component={MapStack} />
      </Tab.Navigator>
    );
  }
}
