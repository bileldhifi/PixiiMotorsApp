import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../Styles/colors";
import { horizontalScale, moderateScale, verticalScale } from "../../Utils/Metrics";
import { TYPOGRAPHY } from "../../Constants/typography";

interface ScreenHeaderProps {
  title: string;
  icon: string;
}
const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} style={styles.iconStyle} />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  iconStyle: { color: Colors.grey, alignSelf: "center" },
  container: {
    flexDirection: "row",
    backgroundColor : Colors.black,
    paddingTop: verticalScale(30),
  },
  titleText: {
    alignSelf: "center",
    color : Colors.white,
    marginHorizontal : horizontalScale(10),
    fontFamily: TYPOGRAPHY.semiBold,
    fontSize: moderateScale(30),
  },
});
