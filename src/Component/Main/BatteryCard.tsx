import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Iconn from "react-native-vector-icons/MaterialIcons";
import { IMAGES } from "../../Constants/image";
import { TYPOGRAPHY } from "../../Constants/typography";
import { Colors } from "../../Styles/colors";
import { Fonts } from "../../Styles/fonts";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";

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
      <ImageBackground source={IMAGES.scooterLogo} style={styles.imageBg}>
        <View style={styles.container}>
          {!expanded && (
            <>
              <View style={styles.batteryWrapper}>
                <Text style={styles.batteryText}>Battery</Text>
                <Text style={styles.batterySubText}>81%</Text>
              </View>
              <View style={styles.batteryWrapper}>
                <Text style={styles.batteryText}>Range</Text>
                <Text style={styles.batterySubText}>64 Km</Text>
              </View>
            </>
          )}
          {expanded && (
            <>
              <View style={styles.batteryWrapper}></View>
              <View style={styles.batteryWrapper}></View>
            </>
          )}
          <View style={styles.chevronContainer}>
            <Pressable style={styles.iconRadius} onPress={toggleExpanded}>
              <Icon
                name={expanded ? "chevron-up" : "chevron-down"}
                size={moderateScale(50)}
                color={expanded ? Colors.cardIcon : "#767676"}
              />
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      {expanded && (
        <>
          <View style={styles.expandedContainer}>
            <View style={styles.batteryWrapper}>
              <Text style={styles.batteryText}>Battery</Text>
              <Text style={styles.batterySubText}>81%</Text>
            </View>
            <View style={styles.batteryWrapper}>
              <Text style={styles.batteryText}>Range</Text>
              <Text style={styles.batterySubText}>64 Km</Text>
            </View>
          </View>
          <View style={styles.expandedContainer}>
            <View style={styles.batteryWrapper}>
              <Text style={styles.batteryText}>Current speed</Text>
              <Text style={styles.batterySubText}>27 Km/h</Text>
            </View>
            <View style={styles.batteryWrapper}>
              <Text style={styles.batteryText}>Mode</Text>
              <View style={{ flexDirection: "row" }}>
                <Iconn
                  name="eco"
                  size={moderateScale(30)}
                  color={Colors.mainGreen}
                  style={styles.modeIcon}
                />
              <Text style={styles.batterySubText}>Eco</Text>
              </View>
            </View>
          </View>
        </>
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
    flex: 1,
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  batteryWrapper: {
    flexDirection: "column",
    marginVertical: verticalScale(5),
    flex: 1,
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
    fontFamily: TYPOGRAPHY.regular,
  },
  batterySubText: {
    color: Colors.icon,
    fontSize: Fonts.secondary,
    paddingVertical: verticalScale(5),
    fontFamily: TYPOGRAPHY.semiBold,
  },
  chevronContainer: {
    width: moderateScale(50),
    justifyContent: "center",
    alignItems: "center",
  },
  modeIcon:{
    alignSelf : 'center'
  }
});
