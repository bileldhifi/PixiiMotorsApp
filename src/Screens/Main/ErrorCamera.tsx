import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Styles/colors";
import { moderateScale } from "../../Utils/Metrics";

const ErrorCamera = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ErrorCamera</Text>
    </View>
  );
};

export default ErrorCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.white,
    fontSize: moderateScale(30),
  },
});
