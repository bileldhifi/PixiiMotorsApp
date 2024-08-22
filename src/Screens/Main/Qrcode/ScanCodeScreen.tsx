import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { IMAGES } from "../../../Constants/image";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../Utils/Metrics";
import { TYPOGRAPHY } from "../../../Constants/typography";

const ScanCodeScreen = () => {
  return (
    <View style={styles.container}>
      {/* QR Code Section */}
      <View style={styles.qrSection}>
        <ImageBackground
          source={IMAGES.scanCodeImg}
          style={styles.qrImageBackground}
        >
          <Text style={styles.qrTitle}>Scan the QR code on your scooter</Text>
        </ImageBackground>
      </View>

      {/* Vehicle ID Section */}
      <View style={styles.vehicleIdSection}>
        <ImageBackground
          source={IMAGES.scooterLogoQrSceen}
          style={styles.qrImageBackground}
          imageStyle={styles.vehicleImage}
        >
          <Text style={styles.orText}>or</Text>
          <Text style={styles.title}>Enter Vehicle ID</Text>
          <Text style={styles.subtitle}>Vehicle ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Write your Vehicle ID consisting of 8 characters..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.helpWrapper}>
            <Text style={styles.helpText}>Where can I find this?</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default ScanCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  qrSection: {
    flex: 2, // Adjust the height ratio as needed
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleIdSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: horizontalScale(10),
  },
  qrImageBackground: {
    width: "100%",
    height: "100%",
  },
  qrTitle: {
    color: "#000000",
    fontSize: moderateScale(30),
    fontFamily: TYPOGRAPHY.medium,
    textAlign: "left",
    maxWidth: horizontalScale(250),
    marginLeft: horizontalScale(30),
    marginTop: verticalScale(20),
  },
  orText: {
    color: "#ffffff",
    fontSize: moderateScale(25),
    alignSelf: "flex-start",
    marginTop: verticalScale(30),
    fontFamily : TYPOGRAPHY.medium
  },
  vehicleImageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: moderateScale(20),
  },
  vehicleImage: {
    resizeMode: "cover",
  },
  title: {
    color: "#ffffff",
    fontSize: moderateScale(30),
    textAlign: "left",
    marginTop: verticalScale(20),
    fontFamily: TYPOGRAPHY.semiBold,
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: verticalScale(60),
    marginBottom : verticalScale(10)

  },
  input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    color: "#ffffff",
    backgroundColor: "white",
    borderRadius: 5,
  },
  helpText: {
    color: "#ffffff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  helpWrapper: {
    alignSelf: "flex-end",
    marginTop: verticalScale(10),
  },
});
