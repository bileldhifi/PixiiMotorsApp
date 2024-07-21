import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Utils/Metrics";
import { Colors } from "../Styles/colors";
import { Fonts } from "../Styles/fonts";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Images } from "../Constants/image";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Pixii Shadow V1</Text>
          <View style={styles.bluetoothWrapper}>
            <Icon
              name="bluetooth"
              size={moderateScale(20)}
              color={Colors.bluetooth}
            ></Icon>
            <Text style={styles.subTitle}>Connected</Text>
          </View>
        </View>
        <View style={styles.rightSideWrapper}>
          <Pressable style={styles.weatherWrapper}>
            <Text style={styles.weatherText}>35C</Text>
            <Icon
              name="white-balance-sunny"
              size={moderateScale(24)}
              color={Colors.charginIcon}
            />
          </Pressable>
          <Pressable style={styles.profileIcon}>
            <Icon name="account" size={moderateScale(24)} color="#fff" />
          </Pressable>
        </View>
      </View>
      <View style={styles.charginContainer}>
        <Icon
          name="flash"
          size={moderateScale(20)}
          color={Colors.charginIcon}
        ></Icon>
        <Text>CHARGING</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: Images.headerBackground,
    height: verticalScale(180),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: moderateScale(10),
  },
  titleWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: Colors.primary,
    fontFamily: "CALIBREMEDIUM",
    fontSize: moderateScale(25),
  },
  subTitle: {
    color: Colors.secondary,
    fontSize: moderateScale(15),
  },
  rightSideWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
    alignSelf: "flex-start",
  },
  weatherWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    padding: horizontalScale(5),
    borderRadius: moderateScale(20),
    backgroundColor: "grey",
    marginHorizontal: horizontalScale(5),
  },
  weatherText: {
    fontSize: moderateScale(15),
    marginHorizontal : horizontalScale(5)
  },

  profileIcon: {
    borderRadius: moderateScale(20),
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    // width: horizontalScale(40),
    // height: horizontalScale(40),
    padding: horizontalScale(5),
  },
  bluetoothWrapper: {
    flexDirection: "row",
    alignContent: "center",
  },
  charginContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: moderateScale(20),
    justifyContent: "center",
    backgroundColor: "grey",
    width: horizontalScale(120),
    paddingVertical: verticalScale(2),
    alignSelf: "center",
    color: Colors.charginWrapper,
  },
  chargingText: {
    color: Colors.primary,
    fontFamily: "CALIBREMEDIUM",
    fontSize: moderateScale(15),
    marginLeft: horizontalScale(10),
  },
});
