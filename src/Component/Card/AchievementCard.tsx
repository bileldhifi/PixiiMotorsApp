import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";
import { Colors } from "../../Styles/colors";
import { TYPOGRAPHY } from "../../Constants/typography";
// import { ProgressBar } from 'react-native-paper';
import { LinearProgress } from "react-native-elements";
type AchievementCardProps = {
  title: string;
  icon: string;
  checkIcon?: string;
  badgeText: string;
  descriptionText: string;
  value:number
};

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  icon,
  checkIcon,
  badgeText,
  descriptionText,
  value
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <View style={styles.rideWrapper}>
          <Text style={styles.titleText}>{title}</Text>
          {checkIcon && (
            <Icon name={checkIcon} size={25} style={styles.checkIconStyle} />
          )}
        </View>
        <Icon name={icon} size={25} style={styles.iconStyle} />
      </View>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{badgeText}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{descriptionText}</Text>
      </View>
      <LinearProgress
        color={Colors.mainGreen}
        trackColor={Colors.black}
        value={value}
        variant="determinate"
      />
    </View>
  );
};

export default AchievementCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C4B36",
    borderRadius: 10,
    paddingHorizontal: horizontalScale(14),
    paddingVertical: verticalScale(16),
  },
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  rideWrapper: { flexDirection: "row" },
  titleText: {
    fontSize: moderateScale(23),
    color: Colors.white,
    fontFamily: TYPOGRAPHY.semiBold,
    marginRight: horizontalScale(10),
  },
  checkIconStyle: {
    color: Colors.mainGreen,
  },
  iconStyle: {
    color: Colors.white,
  },
  badgeContainer: {
    marginBottom: verticalScale(10),
  },
  badgeText: {
    fontSize: moderateScale(16),
    color: Colors.white,
    fontFamily: TYPOGRAPHY.medium,
  },
  progressBar: {
    height: verticalScale(5),
    borderRadius: 5,
  },
  descriptionContainer: {
    marginBottom: verticalScale(5),
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  descriptionText: {
    fontSize: moderateScale(13),
    color: Colors.mainGreen,
    fontFamily: TYPOGRAPHY.regular,
  },
});
