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
            <Text style={[styles.successText, { color: Colors.mainGreen }]}>
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
                name="check-bold"
                size={moderateScale(50)}
                style={styles.checkIcon}
                color={Colors.red}
              />
            </View>
            <Text style={[styles.successText, { color: Colors.red,marginBottom : verticalScale(10) }]}>
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
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: Colors.mainGreen,
    fontSize: 16,
    fontWeight: "600",
    position: "absolute",
    textAlign: "center",
  },
  errorScreen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  errorText: {
    color: "red",
    fontSize: 18,
    fontWeight: "600",
  },
  callSupportButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "red",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
  },
  subTitleText: { color: Colors.white, fontSize: 18 },
  buttonUnpair: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(8),
  },
  unpairText: { color: Colors.white, fontSize: 14 },
  documentContainer: { marginTop: 10 },
  addDocumentText: {
    color: "green",
    marginTop: 5,
    textDecorationLine: "underline",
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
    top: "35%", // Adjust this value to vertically center the icon
  },
  successText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 50, // Adds space between the icon and the text
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
