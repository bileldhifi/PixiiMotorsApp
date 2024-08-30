import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TYPOGRAPHY } from "../../Constants/typography";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps {
  text: string;
  onpress?:any
}

const Button: React.FC<ButtonProps> = ({ text,onpress }) => {
  return (
    <LinearGradient
      colors={["#5F5CFF", "#4E4AFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 12,
    width: "100%", // Full width for the gradient
  },
  button: {
    width: "100%", // Full width for the button
    paddingVertical: verticalScale(15), // Adjust padding as needed
    alignItems: "center", // Centers text horizontally
    justifyContent: "center", // Centers text vertically
  },
  buttonText: {
    color: "#fff",
    fontFamily: TYPOGRAPHY.medium,
    fontSize: moderateScale(15),
  },
});
