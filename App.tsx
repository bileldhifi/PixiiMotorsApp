import "./gesture-handler";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import HomeHeader from "./src/Component/HomeHeader";
import Home from "./src/Screens/HomeScreen";
import { Colors } from "./src/Styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import BootSplash from "react-native-bootsplash";
import AuthStack from "./src/Navigations/AuthStack";
import HomeStack from "./src/Navigations/HomeStack";
import LaunchStack from "./src/Navigations/AppStack";
import LoginHolder from "./src/Screens/LoginHolder";

const App = () => {
  useEffect(() => {
    const init = async () => {
    
    };
    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);


  return (
      <LoginHolder />
  );
};
export default App;

const styles = StyleSheet.create({});
