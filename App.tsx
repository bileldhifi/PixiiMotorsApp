import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import BootSplash from "react-native-bootsplash";
import "./gesture-handler";
import ToastComponent, { showToast } from "./src/Component/Alert/Toast";



  const handlePress = () => {
    showToast('success', 'Operation Successful', 'Your action was successful!');
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
      <Button title="Show Success Toast" onPress={handlePress} />
      <ToastComponent />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({});
