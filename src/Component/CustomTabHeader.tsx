import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale, moderateScale, verticalScale } from "../Utils/Metrics";
import { Colors } from "../Styles/colors";
import { typography } from "../Constants/typography";

type CustomHeaderProps = {
    icon: string;
    title:string
  };

const CustomTabHeader :React.FC<CustomHeaderProps>= ({ icon,title }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={horizontalScale(25)} color={Colors.grey} style={styles.icon}/>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomTabHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
  },
  title: {
    fontSize: moderateScale(30),
    justifyContent: "center",
    color: Colors.primary,
    fontFamily: typography.semiBold,
    alignSelf : 'center',
    marginLeft : horizontalScale(10)
  },
  icon : {
    alignSelf : 'center'
  }
});
