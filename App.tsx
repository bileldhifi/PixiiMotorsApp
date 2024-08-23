import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import BootSplash from "react-native-bootsplash";
import "./gesture-handler";
import BottomTab from "./src/Navigations/BottomTab";
import { NavigationContainer } from "@react-navigation/native";
import LoginHolder from "./src/Screens/Auth/LoginHolder";
import HomeCard from "./src/Component/Main/HomeCard";
import HomeScreen from "./src/Screens/Main/Home/HomeScreen";
import QrcodeScreen from "./src/Screens/Main/Qrcode/QrcodeScreen";
import ScanCodeScreen from "./src/Screens/Main/Qrcode/ScanCodeScreen";
import BatteryCard from "./src/Component/Main/BatteryCard";
import AchievementCard from "./src/Component/Card/AchievementCard";
import alert from "./src/Component/Alert/zab";

const App = () => {
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      {/* <AchievementCard
        title={"Ride 5 000 Km"}
        icon={"navigation-variant-outline"}
        checkIcon={"check-bold"}
        badgeText={"Silver Badge"}
        descriptionText={"Earned 24/07/2024"}
        value={0.7}
      /> */}
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({});
