import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import HomeStack from "./HomeStack";
import MapStack from "./MapStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/colors";
import { moderateScale, verticalScale } from "../Utils/Metrics";
import Support from "../Screens/Support";
import Notification from "../Screens/Notification";
import Setting from "../Screens/Setting";

const Tab = createBottomTabNavigator();

export default class ButtomTab extends Component {
  render() {
    return (
      <Tab.Navigator
      initialRouteName="HomeStack"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarInactiveTintColor: Colors.inactiveTab,
          tabBarActiveTintColor: Colors.cardIcon,
          tabBarStyle: {
            backgroundColor: Colors.globalBg,
            height: verticalScale(90),
          },
        }}
      >
        <Tab.Screen
          name="Support"
          component={Support}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-agent" color={color} size={verticalScale(30)} />
            ),
          }}
        />
        <Tab.Screen
          name="MapTab"
          component={MapStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="moped" color={color} size={verticalScale(30)} />
            ),
          }}
        />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={verticalScale(50)} />
            ),
            tabBarItemStyle: { marginBottom: verticalScale(30) },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={verticalScale(30)} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={verticalScale(30)} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}