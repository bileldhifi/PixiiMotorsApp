import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import LoginHolder from "../Screens/Auth/LoginHolder";
import HomeScreen from "../Screens/Main/Home/HomeScreen";
import MapScreen from "../Screens/Main/Map/MapScreen";
import ProfileEditScreen from "../Screens/Main/Profile/ProfileEditScreen";
import ProfileScreen from "../Screens/Main/Profile/ProfileScreen";
import QrcodeScreen from "../Screens/Main/Qrcode/QrcodeScreen";
import ScanCodeScreen from "../Screens/Main/Qrcode/ScanCodeScreen";
import SupportScreen from "../Screens/Main/Support/SupportScreen";
import SwapBattery from "../Screens/Main/SwapBattery/SwapBattery";
import BottomTab from "./BottomTab";
import AchievementScreen from "../Screens/Main/Achievement/AchievementScreen";
import HomeHeader from "../Component/Main/HomeHeader";
import BackHeader from "../Component/Header/BackHeader";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="BottomTab"
    >
      <Stack.Screen
        name="LoginHolder"
        component={LoginHolder}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      <Stack.Screen name="ScanCodeScreen" component={ScanCodeScreen} />
      <Stack.Screen name="QrcodeScreen" component={QrcodeScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="SwapBattery"
        component={SwapBattery}
        options={{ header: () => <BackHeader showBackButton={true} /> }}
      />
      <Stack.Screen name="MapScreen" component={MapScreen} options={{ header: () => <BackHeader showBackButton={false} /> }} />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      <Stack.Screen name="AchievementScreen" component={AchievementScreen} />
      <Stack.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={{ header: () => <BackHeader showBackButton={true} /> }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
