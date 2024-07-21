import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeCard from "./src/Component/HomeCard";
import Home from "./src/Screens/Home";
import BatteryCard from "./src/Component/BatteryCard";
import HomeHeader from "./src/Component/HomeHeader";
import { Colors } from "./src/Styles/colors";

const App = () => {
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <Home />
      {/* <BatteryCard/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({ container : {backgroundColor : Colors.globalBg,flex:  1} });
