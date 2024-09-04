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
import PairedSucess from "../Screens/Main/PairedSucces/PairedSucess";
import DiagnosticScreen from "../Screens/Main/Diagnostic/DiagnosticScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="LoginHolder"
    >
      <Stack.Screen
        name="LoginHolder"
        component={LoginHolder}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      <Stack.Screen
        name="ScanCodeScreen"
        component={ScanCodeScreen}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      <Stack.Screen
        name="QrcodeScreen"
        component={QrcodeScreen}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="SwapBattery"
        component={SwapBattery}
        options={{ header: () => <BackHeader showBackButton={true} /> }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      <Stack.Screen
        name="AchievementScreen"
        component={AchievementScreen}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      <Stack.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={{ header: () => <BackHeader showBackButton={true} /> }}
      />
      <Stack.Screen
        name="PairedSucess"
        component={PairedSucess}
        options={{ header: () => <BackHeader showBackButton={false} /> }}
      />
      
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DiagnosticScreen"
        component={DiagnosticScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
