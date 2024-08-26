import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TYPOGRAPHY } from "../../Constants/typography";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps {
    text:string
}
const Button :React.FC<ButtonProps>= ({ text }) => {
  return (
    <LinearGradient
      colors={["#5F5CFF", "#4E4AFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: TYPOGRAPHY.medium,
    fontSize: moderateScale(15),
  },
  gradient: {
    borderRadius: 12,
  },
});
