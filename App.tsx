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
import NotificationListItem from "./src/Component/Notification/NotificationListItem";

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
    <SafeAreaView style={{ flex: 1 }}>
      <Notification/>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({});
