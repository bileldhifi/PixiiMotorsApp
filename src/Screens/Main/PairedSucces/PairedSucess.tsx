import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { IMAGES } from "../../../Constants/image";
import { Colors } from "../../../Styles/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../Utils/Metrics";
import { TYPOGRAPHY } from "../../../Constants/typography";

const PairedSuccess = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("BottomTab");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Paired Successfully</Text>
      <Image source={IMAGES.pixiiLogoWhite} style={styles.logo} />
    </View>
  );
};

export default PairedSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontSize: moderateScale(35),
    marginBottom: verticalScale(30),
    fontFamily: TYPOGRAPHY.medium,
  },
  logo: {
    width: horizontalScale(60),
    height: verticalScale(60),
    resizeMode: "contain",
  },
});
