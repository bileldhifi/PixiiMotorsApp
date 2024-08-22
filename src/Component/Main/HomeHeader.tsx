import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale, moderateScale, verticalScale } from "../../Utils/Metrics";
import { Colors } from "../../Styles/colors";
import { IMAGES } from "../../Constants/image";
import { TYPOGRAPHY } from "../../Constants/typography";


const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftSide}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subTitle}>Flen fouleni</Text>
          <View style={styles.statusContainer}>
            <Icon
              name="ellipse"
              size={moderateScale(15)}
              color={Colors.status}
              style={styles.statusIcon}
            ></Icon>
            <Text style={styles.statusText}>On road</Text>
          </View>
        </View>
        <View style={styles.rightSideWrapper}>
          <Pressable style={styles.profileIcon}>
            <Icon name="account" size={moderateScale(45)} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
    flexDirection: "column",
    backgroundColor: IMAGES.headerBackground,
    height: verticalScale(120),
    marginBottom: 0,
    paddingBottom: 0,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(10),
  },
  leftSide: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    color: Colors.primary,
    fontFamily: TYPOGRAPHY.light,
    fontSize: moderateScale(20),
  },
  subTitle: {
    color: Colors.primary,
    fontSize: moderateScale(30),
    fontFamily: TYPOGRAPHY.medium,
  },
  rightSideWrapper: {
    alignSelf: "flex-start",
    marginTop: verticalScale(10),
  },

  profileIcon: {
    borderRadius: moderateScale(50),
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    padding: horizontalScale(5),
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: moderateScale(20),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(4),
    borderColor: Colors.status,
    borderWidth: horizontalScale(0.8),
    marginVertical: verticalScale(10),
  },
  statusIcon: { paddingRight: horizontalScale(5)},
  statusText: {
    color: Colors.status,
    fontFamily: TYPOGRAPHY.medium,
    fontSize: moderateScale(12),
  },
});
