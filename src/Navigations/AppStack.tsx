import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import LoginHolder from "../Screens/Auth/LoginHolder";
import QrcodeScreen from "../Screens/Main/Qrcode/QrcodeScreen";
import ScanCodeScreen from "../Screens/Main/Qrcode/ScanCodeScreen";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginHolder} />
        <Stack.Screen name="ScanCodeScreen" component={ScanCodeScreen} />
        <Stack.Screen name="QrcodeScreen" component={QrcodeScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
