import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import BootSplash from "react-native-bootsplash";
import "./gesture-handler";
import ToastComponent, { showToast } from "./src/Component/Alert/Toast";
import ProfileScreen from "./src/Screens/Main/Profile/ProfileScreen";
import ProfileEditScreen from "./src/Screens/Main/Profile/ProfileEditScreen";
import LoginHolder from "./src/Screens/Auth/LoginHolder";
import Modal from "./src/Component/Modal/CustomModal";
import Dialog from "./src/Component/Modal/CustomModal";
import CustomModal from "./src/Component/Modal/CustomModal";
import CustomTabHeader from "./src/Component/Main/CustomTabHeader";
import Notification from "./src/Screens/Main/Notification/NotificationScreen";
import ScreenHeader from "./src/Component/Header/ScreenHeader";
import NotificationListItem from "./src/Component/ListItem/NotificationListItem";
import AchievementCard from "./src/Component/Card/AchievementCard";
import AchievementScreen from "./src/Screens/Main/Achievement/AchievementScreen";
import NotificationScreen from "./src/Screens/Main/Notification/NotificationScreen";
import BottomTab from "./src/Navigations/BottomTab";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./src/Styles/colors";
import SwapBattery from "./src/Screens/Main/SwapBattery/SwapBattery";
import AppStack from "./src/Navigations/AppStack";

const handlePress = () => {
  showToast("success", "Operation Successful", "Your action was successful!");
};

const App = () => {
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor : Colors.black }}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({});
