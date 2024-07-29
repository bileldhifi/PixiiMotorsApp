import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
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

interface BatteryCardProps {
  expanded: boolean;
  toggleExpanded: () => void;
}

const BatteryCard: React.FC<BatteryCardProps> = ({
  expanded,
  toggleExpanded,
}) => {
  return (
    <View>
      <ImageBackground source={Images.scooterLogo} style={styles.imageBg}>
        <View style={styles.container}>
          <View style={styles.batteryWrapper}>
            <Text style={styles.batteryText}>Battery</Text>
            <Text style={styles.batterySubText}>81%</Text>
          </View>
          <View style={styles.batteryWrapper}>
            <Text style={styles.batteryText}>Range</Text>
            <Text style={styles.batterySubText}>64 Km</Text>
          </View>
          <Pressable style={styles.iconRadius} onPress={toggleExpanded}>
            <Icon
              name={expanded ? "chevron-up" : "chevron-down"}
              size={moderateScale(50)}
              color={expanded ? Colors.cardIcon : "#767676"}
            />
          </Pressable>
        </View>
      </ImageBackground>

      {expanded && (
        <View style={styles.expandedContainer}>
          <View style={styles.batteryWrapper}>
            <Text style={styles.batteryText}>Current Speed</Text>
            <Text style={styles.batterySubText}>27 Km/h</Text>
          </View>
          <View style={styles.batteryWrapper}>
            <Text style={styles.batteryText}>Mode</Text>
            <Text style={styles.batterySubText}>Eco</Text>
          </View>
        </View>
      )}
    </View>
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
  expandedContainer: {
    backgroundColor: Colors.globalBg,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  batteryWrapper: {
    flexDirection: "column",
    marginVertical: verticalScale(5),
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
