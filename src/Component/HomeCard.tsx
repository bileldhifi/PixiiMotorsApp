import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/colors";
import { Fonts } from "../Styles/fonts";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Utils/Metrics";
import { typography } from "../Constants/typography";

type HomeCardProps = {
  title: string;
  icon: string;
  subTitle: string;
  iconColor: string;
  itemBgColor: string;
};

const HomeCard: React.FC<HomeCardProps> = ({
  title,
  icon,
  subTitle,
  iconColor,
  itemBgColor,
}) => {
  return (
    <Pressable style={styles.cardPressable}>
      <View style={[styles.iconContainer, { backgroundColor: itemBgColor }]}>
        <Icon name={icon} size={30} color={iconColor} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.arrowIcon}>
        <Icon name="chevron-right" size={24} color={Colors.chevronColor} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardPressable: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.backgroundCard,
    borderRadius: horizontalScale(10),
    marginBottom: verticalScale(5),
    padding: horizontalScale(10),
    justifyContent: "space-between",
  },
  iconContainer: {
    padding: horizontalScale(10),
    borderRadius: horizontalScale(10),
  },
  textWrapper: {
    alignItems: "flex-start",
    marginLeft : horizontalScale(15),
    flex : 1
  },
  title: {
    fontSize: moderateScale(15),
    color: Colors.primary,
    fontFamily: "CALIBREMEDIUM",
    flex: 1,
  },
  subTitle: {
    color: Colors.secondary,
    fontFamily: typography.bilel,
    flex: 1,
  },
  arrowIcon: {
    alignSelf: "flex-start",
  },
});

export default HomeCard;
