import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import BootSplash from "react-native-bootsplash";
import "./gesture-handler";
import { showToast } from "./src/Component/Alert/Toast";
import AppStack from "./src/Navigations/AppStack";
import { Colors } from "./src/Styles/colors";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black }}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({});
