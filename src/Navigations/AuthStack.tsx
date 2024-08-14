import { Text, View } from "react-native";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

export default class AuthStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signup" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="signin" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }
}
