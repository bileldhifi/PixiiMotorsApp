import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Divider from "../../../Component/Divider/Divider";
import ScreenHeader from "../../../Component/Header/ScreenHeader";
import { IMAGES } from "../../../Constants/image";
import { Colors } from "../../../Styles/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../Utils/Metrics";
import { TYPOGRAPHY } from "../../../Constants/typography";

const DiagnosticScreen = () => {
  const [screen, setScreen] = useState("default");

  const handleAnalyse = () => {
    const errorDetected = false;
    setScreen(errorDetected ? "error" : "success");
  };

  const renderContent = () => {
    switch (screen) {
      case "success":
        return (
          <View style={styles.successScreen}>
            <View style={styles.statusContainer}>
              <Image source={IMAGES.cercleAnalyse} style={styles.cercleImage} />
              <Icon
                name="check-bold"
                size={moderateScale(50)}
                style={styles.checkIcon}
                color={Colors.mainGreen}
              />
            </View>
            <Text style={[styles.responseText, { color: Colors.mainGreen }]}>
              No errors detected
            </Text>
          </View>
        );
      case "error":
        return (
          <View style={styles.errorScreen}>
            <View style={styles.statusContainer}>
              <Image
                source={IMAGES.errorCercleAnalyse}
                style={styles.cercleImage}
              />
              <Icon
                name="alert-circle"
                size={moderateScale(50)}
                style={styles.checkIcon}
                color={Colors.red}
              />
            </View>
            <Text
              style={[
                styles.responseText,
                {
                  color: Colors.red,
                  marginBottom: verticalScale(10),
                  textDecorationLine: "underline",
                },
              ]}
            >
              1 error detected
            </Text>
            <TouchableOpacity style={styles.buttonUnpair}>
              <Text style={styles.unpairText}>Call Suppport</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return (
          <View style={styles.defaultScreen}>
            <TouchableOpacity
              style={styles.analyseButton}
              onPress={handleAnalyse}
            >
              <Image source={IMAGES.cercleAnalyse} style={styles.cercleImage} />
              <Text style={styles.buttonText}>Analyse</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="My Scooter" icon="moped" />
      <Divider />
      <View style={styles.bodyContainer}>
        {renderContent()}
        <View style={styles.additionalContent}>
          <View style={styles.scooterIDContainer}>
            <Text style={styles.titleText}>Scooter ID</Text>
            <View style={styles.scooterIDBodyContainer}>
              <Text style={styles.subTitleText}>1337420</Text>
              <TouchableOpacity style={styles.buttonUnpair}>
                <Text style={styles.unpairText}>Unpair</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.documentContainer}>
            <Text style={styles.titleText}>My Documents</Text>
            <Text style={styles.subTitleText}>Doc_Shadow.pdf</Text>
            <Text style={styles.addDocumentText}>Add Document</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DiagnosticScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  defaultScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: { flex: 1, justifyContent: "space-around" },
  analyseButton: {
    borderRadius: 75,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: Colors.mainGreen,
    fontSize: moderateScale(25),
    fontFamily: TYPOGRAPHY.medium,
    position: "absolute",
    textAlign: "center",
  },
  errorScreen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  additionalContent: {
    justifyContent: "center",
  },
  scooterIDContainer: { marginVertical: 10 },
  scooterIDBodyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    color: Colors.grey,
    fontSize: moderateScale(20),
    marginBottom: verticalScale(5),
    fontFamily: TYPOGRAPHY.regular,
  },
  subTitleText: {
    color: Colors.white,
    fontSize: moderateScale(25),
    fontFamily: TYPOGRAPHY.regular,
  },
  buttonUnpair: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(8),
  },
  unpairText: {
    color: Colors.white,
    fontSize: moderateScale(18),
    fontFamily: TYPOGRAPHY.regular,
  },
  documentContainer: { marginTop: 10 },
  addDocumentText: {
    color: "green",
    marginTop: verticalScale(5),
    textDecorationLine: "underline",
    fontFamily: TYPOGRAPHY.regular,
  },

  successScreen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  cercleImage: {
    width: 150,
    height: 150,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  successIcon: {
    position: "absolute", // Ensures the icon is centered in the circle
    color: "green",
  },
  responseText: {
    fontSize: 18,
    fontFamily: TYPOGRAPHY.semiBold,
    marginTop: verticalScale(10),
    textAlign: "center",
  },
  checkIcon: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
  },
  statusContainer: {
    position: "relative", // Set relative positioning for the container
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
