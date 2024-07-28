import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import HomeHeader from "./src/Component/HomeHeader";
import Home from "./src/Screens/Home";
import { Colors } from "./src/Styles/colors";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Home />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.globalBg, flex: 1 },
});
