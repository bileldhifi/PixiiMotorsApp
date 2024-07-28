import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../Component/HomeHeader";
import BatteryCard from "../Component/BatteryCard";
import { Colors } from "../Styles/colors";
import { horizontalScale } from "../Utils/Metrics";

const BatteryDetails = () => {
  return (
    <SafeAreaView style={styles.Glcontainer}>
      <View style={styles.container}>
        <HomeHeader />
        <BatteryCard />
      </View>
    </SafeAreaView>
  );
};

export default BatteryDetails;

  const styles = StyleSheet.create({
  Glcontainer: { backgroundColor: Colors.globalBg, flex: 1 },
  container: {
    flexDirection: "column",
    paddingHorizontal: horizontalScale(15),
  },
  });
