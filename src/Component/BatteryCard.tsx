import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/colors";
import { Fonts } from "../Styles/fonts";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Utils/Metrics";
import { typography } from "../Constants/typography";

const BatteryCard = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Battery</Text>
          <Icon name="chevron-right" size={24} color={Colors.chevronColor}/>
        </View>
        <Text style={styles.subText}>Last charge 2w ago</Text>
        <View style={styles.batteryContainer}>
          <Icon name="home" size={50}></Icon>
          <View style={styles.battery}>
            <Text style={styles.batteryLevel}>85%</Text>
          </View>
        </View>
        <Text style={styles.distance}>212 km</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: horizontalScale(20),
    padding: moderateScale(15),
    // marginVertical: verticalScale(10),
    backgroundColor: Colors.backgroundCard,
    flex: 1,
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,

  },
  pressable: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: verticalScale(10),
  },
  headerText: {
    fontSize: moderateScale(16),
    color: Colors.primary,
    fontFamily: "CALIBREMEDIUM",
  },
  subText: {
    color: Colors.secondary,
    fontFamily: typography.bilel,
    marginBottom: verticalScale(10),
  },
  batteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  battery: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d4edda",
    padding: horizontalScale(10),
    borderRadius: horizontalScale(10),
  },
  batteryLevel: {
    fontSize: moderateScale(18),
    color: "#28a745",
    fontFamily: "CALIBREMEDIUM",
  },
  distance: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(16),
    fontFamily: "CALIBREMEDIUM",
    color: Colors.primary,
  },
});

export default BatteryCard;
