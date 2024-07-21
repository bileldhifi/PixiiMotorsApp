import { StyleSheet, View } from "react-native";
import React from "react";
import HomeCard from "../Component/HomeCard";
import BatteryCard from "../Component/BatteryCard";
import { Colors } from "../Styles/colors";
import { horizontalScale, verticalScale } from "../Utils/Metrics";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        <BatteryCard />
      </View>
      <View style={styles.rightPart}>
        <HomeCard
          title="Location"
          subTitle="Parked"
          iconColor="#F3AF3D"
          icon="map"
          itemBgColor={Colors.locationCardIconBg}
        />
        <HomeCard
          title="Diagnostic"
          subTitle="last check 2"
          iconColor="#3B5974"
          icon="wrench"
          itemBgColor={Colors.diagnoticCardIconBg}
        />
        <HomeCard
          title="Mode"
          subTitle="Sport"
          iconColor="#03A168"
          icon="flash"
          itemBgColor={Colors.diagnoticCardIconBg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginRight: horizontalScale(5),
    justifyContent : 'space-around'
  },
  leftPart: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    // marginLeft: horizontalScale(5),
  },
  rightPart: {
    flex: 1.4 ,
    backgroundColor: Colors.globalBg,
    paddingHorizontal: horizontalScale(5),
  },
});

export default Home;
