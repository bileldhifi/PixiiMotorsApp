import { Text, View } from "react-native";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/Auth/LoginScreen";
import RegisterScreen from "../Screens/Auth/RegisterScreen";
import BottomTab from "./BottomTab";
import ScanCodeScreen from "../Screens/Main/Qrcode/ScanCodeScreen";
import QrcodeScreen from "../Screens/Main/Qrcode/QrcodeScreen";

const Stack = createStackNavigator();

export default class AuthStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="signup"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ScanCodeScreen" component={ScanCodeScreen} />
        <Stack.Screen name="QrcodeScreen" component={QrcodeScreen} />
      </Stack.Navigator>
    );
  }
}
