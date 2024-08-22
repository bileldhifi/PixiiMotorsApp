import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TYPOGRAPHY } from "../../Constants/typography";
import { Colors } from "../../Styles/colors";
import { Fonts } from "../../Styles/fonts";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";

const WeatherCard = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <View style={styles.topPart}>
          <Text style={styles.headerText}>Mon. 15 Jul.</Text>
        </View>
        <View style={styles.bottomPart}>
          <Text style={styles.subText}>Weather</Text>
          <View style={styles.batteryContainer}>
            <Text style={styles.batteryLevel}>32°</Text>
            <Icon
              name="white-balance-sunny"
              size={horizontalScale(25)}
              style={styles.icon}
            ></Icon>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: horizontalScale(8),
    padding: horizontalScale(17),
    backgroundColor: Colors.backgroundCard,
    flex: 1,
  },
  pressable: {
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
  },
  bottomPart: {},
  headerText: {
    fontSize: Fonts.primary,
    color: Colors.primary,
    fontFamily: TYPOGRAPHY.regular,
    flex: 1,
  },
  topPart: { flex: 1 },
  subText: {
    fontSize: Fonts.primary,
    color: Colors.primary,
    fontFamily: TYPOGRAPHY.regular,
  },
  batteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width : '100%'
  },
  batteryLevel: {
    fontSize: moderateScale(40),
    color: Colors.primary,
    fontFamily: TYPOGRAPHY.light,
    flex : 1
  },
  icon : {color : Colors.primary,
    flex: 0,
  },
});

export default WeatherCard;
