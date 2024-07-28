import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import BatteryCard from "../Component/BatteryCard";
import HomeCard from "../Component/HomeCard";
import WeatherCard from "../Component/WeatherCard";
import { Colors } from "../Styles/colors";
import { horizontalScale, verticalScale } from "../Utils/Metrics";
import HomeHeader from "../Component/HomeHeader";
import ToggleButton from "../Component/ToggleButton";

const Home = () => {
  return (
    <SafeAreaView style={styles.Glcontainer} >
    <View style={styles.container}>
      <HomeHeader />
      <BatteryCard />
      <View style={styles.cardContainer}>
        <View style={styles.leftPart}>
          <WeatherCard />
        </View>
        <View style={styles.rightPart}>
          <HomeCard title="Track Location" iconColor="#03A168" icon="map-marker" />
          <View style={styles.spaceBetweenCard}></View>
          <HomeCard title="Swap Station" iconColor="#03A168" icon="qrcode" />
        </View>
      </View>
      <ToggleButton/>      
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Glcontainer: { backgroundColor: Colors.globalBg, flex: 1 },

  container: {
    flexDirection: "column",
    // justifyContent: "space-around",
    // marginRight: horizontalScale(5),
    paddingHorizontal: horizontalScale(15),
  },
  pixiiLogo: {
    resizeMode: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },

  leftPart: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    marginRight: horizontalScale(10),
  },
  rightPart: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    marginLeft: horizontalScale(10),
  },
  spaceBetweenCard: { height: verticalScale(20) },
});

export default Home;
