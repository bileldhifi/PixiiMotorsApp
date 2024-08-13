import "./gesture-handler";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import HomeHeader from "./src/Component/HomeHeader";
import Home from "./src/Screens/HomeScreen";
import { Colors } from "./src/Styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import ButtomTab from "./src/Navigations/ButtomTab";
import BootSplash from "react-native-bootsplash";
import AuthStack from "./src/Navigations/AuthStack";


const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);
  return (
  
    <NavigationContainer>
      <AuthStack/>
      {/* <ButtomTab /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
});
