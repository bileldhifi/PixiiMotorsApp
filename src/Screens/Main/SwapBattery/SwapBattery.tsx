import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Buttonn from "../../../Component/Button/Button";
import { IMAGES } from "../../../Constants/image";
import { TYPOGRAPHY } from "../../../Constants/typography";
import { Colors } from "../../../Styles/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../Utils/Metrics";

const SwapBattery = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swap Battery</Text>

      {/* QR Code */}
      <View style={styles.qrContainer}>
        <Image source={IMAGES.QrCode} style={styles.qrCode} />
      </View>

      {/* Instruction */}
      <Text style={styles.instruction}>
        Scan the QR code on the station screen
      </Text>
      <Buttonn
        text={"Open Camera"}
        onpress={() => {
          navigation.navigate("QrcodeScreen");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  title: {
    fontSize: moderateScale(35),
    color: Colors.white,
    fontFamily: TYPOGRAPHY.semiBold,
    marginBottom: verticalScale(20),
  },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(40),
  },
  qrCode: {
    width: horizontalScale(150),
    height: verticalScale(150),
    resizeMode: "contain",
  },
  instruction: {
    fontSize: moderateScale(16),
    color: Colors.white,
    marginBottom: verticalScale(180),
    width: horizontalScale(150),
    textAlign: "center",
    alignSelf: "center",
  },
});

export default SwapBattery;
