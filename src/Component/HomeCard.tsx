import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
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
  iconColor: string;
};

const HomeCard: React.FC<HomeCardProps> = ({
  title,
  icon,
}) => {
  return (
    <Pressable style={styles.cardPressable}>
      <Text style={styles.title}>{title}</Text>
      <Icon name={icon} size={45} color={Colors.cardIcon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardPressable: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.backgroundCard,
    borderRadius: horizontalScale(8),
    padding: horizontalScale(17),
    flexWrap : 'wrap',
  },
  title: {
    fontSize: Fonts.primary,
    color: Colors.primary,
    fontFamily: typography.regular,
    flex: 1,
  },
});

export default HomeCard;
