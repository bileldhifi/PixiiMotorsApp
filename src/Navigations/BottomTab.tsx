import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomTabHeader from "../Component/Main/CustomTabHeader";
import { TYPOGRAPHY } from "../Constants/typography";
import HomeScreen from "../Screens/Main/Home/HomeScreen";
import Notification from "../Screens/Main/Notification/NotificationScreen";
import ScanCodeScreen from "../Screens/Main/Qrcode/ScanCodeScreen";
import Setting from "../Screens/Main/Setting/SettingScreen";
import Support from "../Screens/Main/Support/SupportScreen";
import { Colors } from "../Styles/colors";
import { moderateScale, verticalScale } from "../Utils/Metrics";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        sceneContainerStyle={{}}
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarInactiveTintColor: Colors.inactiveTab,
          tabBarActiveTintColor: Colors.cardIcon,
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerStyles,
          tabBarStyle: {
            backgroundColor: Colors.globalBg,
            height: verticalScale(130),
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Support"
          component={Support}
          options={{
            headerTitle: () => <CustomTabHeader icon="home" title="Support" />,
            headerStyle: {},
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="face-agent"
                color={color}
                size={verticalScale(40)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Scan QrCode"
          component={ScanCodeScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="moped"
                color={color}
                size={verticalScale(40)}
              />
            ),
            headerTitle: () => (
              <CustomTabHeader icon="moped" title="Scan Qrcode" />
            ),
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="hexagon-slice-6"
                color={color}
                size={verticalScale(60)}
              />
            ),

            tabBarItemStyle: { marginBottom: verticalScale(30) },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            headerTitle: () => (
              <CustomTabHeader icon="bell" title="Notifications" />
            ),

            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bell"
                color={color}
                size={verticalScale(40)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cog"
                color={color}
                size={verticalScale(40)}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: Colors.globalBg,
    height: verticalScale(110),
  },
  headerTitle: {
    fontSize: moderateScale(30),
    justifyContent: "center",
    color: Colors.primary,
    fontFamily: TYPOGRAPHY.semiBold,
  },
});
