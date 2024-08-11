import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QrcodeScreen from "../Screens/QrcodeScreen";
import ScanCode from "../Screens/ScanCodeScreen";
import ScanCodeScreen from "../Screens/ScanCodeScreen";

export default function QrCodeStack() {
const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScanCodeScreen" component={ScanCodeScreen} />
      <Stack.Screen name="QrcodeScreen" component={QrcodeScreen} />
    </Stack.Navigator>
  );
}
