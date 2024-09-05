import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearProgress } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TYPOGRAPHY } from "../../Constants/typography";
import { Colors } from "../../Styles/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";
type AchievementCardProps = {
  title: string;
  badgeText: string;
  descriptionText: string;
  value: number;
  done: boolean;
};

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  badgeText,
  descriptionText,
  value,
  done,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: done ? Colors.darkgreen : Colors.darkGrey },
      ]}
    >
      <View style={styles.goalContainer}>
        <View style={styles.rideWrapper}>
          <Text
            style={[
              styles.titleText,
              { color: done ? Colors.white : Colors.black },
            ]}
          >
            {title}
          </Text>
          {done && (
            <Icon name={'check-bold'} size={25} style={styles.checkIconStyle} />
          )}
        </View>
        <Icon
          name={done ? 'trophy' : 'lock'}
          size={45}
          style={[
            styles.iconStyle,
            { color: done ? Colors.white : Colors.black },
          ]}
        />
      </View>
      <View style={styles.badgeContainer}>
        <Text
          style={[
            styles.badgeText,
            { color: done ? Colors.white : Colors.black },
          ]}
        >
          {badgeText}
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{descriptionText}</Text>
      </View>
      <LinearProgress
        color={Colors.mainGreen}
        trackColor={Colors.black}
        value={done ? 1 : value}
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
    marginBottom: verticalScale(20),
  },
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  rideWrapper: { flexDirection: "row" },
  titleText: {
    fontSize: moderateScale(27),
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
