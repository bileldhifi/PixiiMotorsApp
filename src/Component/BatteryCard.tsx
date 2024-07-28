import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Utils/Metrics";
import { Fonts } from "../Styles/fonts";
import { Images } from "../Constants/image";
import { typography } from "../Constants/typography";

const BatteryCard = () => {
  return (
    <ImageBackground source={Images.scooterLogo} style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.batteryWrapper}>
          <Text style={styles.batteryText}>Battery</Text>
          <Text style={styles.batterySubText}>100%</Text>
        </View>
        <View style={styles.batteryWrapper}>
          <Text style={styles.batteryText}>Range</Text>
          <Text style={styles.batterySubText}>10 Km</Text>
        </View>
        <View style={styles.batteryWrapper}>
          <Pressable style={styles.iconRadius}>
            <Icon
              name="chevron-down"
              size={moderateScale(50)}
              color='#767676'
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
};

export default BatteryCard;

const styles = StyleSheet.create({
  imageBg: {
    height: verticalScale(200),
    resizeMode: "contain",
    justifyContent: "flex-end",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(20),
  },
  batteryWrapper: {
    flexDirection: "column",
  },
  iconRadius: {
    margin: 0,
    borderRadius: moderateScale(50),
    backgroundColor: Colors.backgroundCard,
  },
  batteryText: {
    color: Colors.primary,
    paddingVertical: verticalScale(5),
    fontSize: Fonts.primary,
    fontFamily: typography.regular,
  },
  batterySubText: {
    color: Colors.icon,
    fontSize: Fonts.secondary,
    paddingVertical: verticalScale(5),
    fontFamily: typography.semiBold,
  },
});
