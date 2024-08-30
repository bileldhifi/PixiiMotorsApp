import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale } from "../../Utils/Metrics";
import { TYPOGRAPHY } from "../../Constants/typography";
import { Colors } from "../../Styles/colors";
import { Fonts } from "../../Styles/fonts";

type HomeCardProps = {
  title: string;
  icon: string;
  iconColor: string;
  onpress?:any
};

const HomeCard: React.FC<HomeCardProps> = ({
  title,
  icon,
  onpress
}) => {
  return (
    <Pressable style={styles.cardPressable} onPress={onpress}>
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
    fontFamily: TYPOGRAPHY.regular,
    flex: 1,
  },
});

export default HomeCard;
