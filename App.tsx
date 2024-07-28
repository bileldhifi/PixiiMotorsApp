import "./gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import HomeHeader from "./src/Component/HomeHeader";
import Home from "./src/Screens/Home";
import { Colors } from "./src/Styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import ButtomTab from "./src/Navigations/ButtomTab";

const App = () => {
  return (
    <NavigationContainer>
      <ButtomTab />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
});
