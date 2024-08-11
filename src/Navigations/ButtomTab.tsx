import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import HomeStack from "./HomeStack";
import MapStack from "./MapStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/colors";
import { moderateScale, verticalScale } from "../Utils/Metrics";
import Support from "../Screens/SupportScreen";
import Notification from "../Screens/NotificationScreen";
import Setting from "../Screens/SettingScreen";
import { StyleSheet } from "react-native";
import { typography } from "../Constants/typography";
import CustomTabHeader from "../Component/CustomTabHeader";
import QrcodeScreen from "../Screens/QrcodeScreen";
import ScanCode from "../Screens/ScanCodeScreen";
import QrCodeStack from "./QrCodeStack";

const Tab = createBottomTabNavigator();

export default class ButtomTab extends Component {
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
            borderTopWidth : 0
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
          component={QrCodeStack}
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
          name="HomeStack"
          component={HomeStack}
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
    fontFamily: typography.semiBold,

  },
});
