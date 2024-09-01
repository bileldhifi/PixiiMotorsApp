import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Divider from "../../../Component/Divider/Divider";
import ScreenHeader from "../../../Component/Header/ScreenHeader";
import { Colors } from "../../../Styles/colors";
import { horizontalScale, moderateScale } from "../../../Utils/Metrics";
import SuggestSupportMessageListItem from "../../../Component/ListItem/SuggestSupportMessageListItem";
import { TYPOGRAPHY } from "../../../Constants/typography";

const SettingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={"Setting"} icon={"cog"} />
      <Divider />

      {/* Body Container */}
      <View style={styles.bodyContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Report an issue");
            }}
          >
            <Text style={styles.optionText}>Report an issue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AchievementScreen");
            }}
          >
            <Text style={styles.optionText}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AchievementScreen");
            }}
          >
            <Text style={styles.optionText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AchievementScreen");
            }}
          >
            <Text style={styles.optionText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginHolder");
            }}
          >
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.signatureContainer}>
          <Text style={styles.signatureText}>APP Version 1.0.0</Text>
          <Text style={styles.signatureText}>Last Updated:27/08/2024</Text>
          <Text style={styles.signatureText}>PIXII MOTORS</Text>
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    paddingHorizontal: horizontalScale(10),
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollContent: {
    paddingBottom: moderateScale(20),
  },
  optionText: {
    fontSize: moderateScale(20),
    color: Colors.white,
    marginBottom: moderateScale(30),
  },
  logoutText: {
    fontSize: moderateScale(20),
    color: Colors.red,
  },
  signatureText: {
    color: Colors.grey,
    fontSize: moderateScale(13),
    fontFamily: TYPOGRAPHY.medium,
  },
  signatureContainer: {
    alignItems: "flex-start",
    marginBottom: moderateScale(10),
  },
});
