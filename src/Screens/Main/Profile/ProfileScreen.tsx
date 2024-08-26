import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale, verticalScale } from "../../../Utils/Metrics";
import { Colors } from "../../../Styles/colors";
import { TYPOGRAPHY } from "../../../Constants/typography";
import LinearGradient from "react-native-linear-gradient";
import Divider from "../../../Component/Divider/Divider";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Profile Icon */}
        <Icon
          name="account"
          size={moderateScale(60)}
          color={Colors.white}
          style={styles.profileIcon}
        />

        {/* User Details */}
        <View style={styles.userDetails}>
          <Text style={styles.nameText}>Flen Fouleni</Text>
          <Text style={styles.emailText}>Flen.fouleni@gmail.com</Text>
        </View>

        {/* Edit Icon */}
        <TouchableOpacity style={styles.editIcon}>
          <Icon
            name="pencil-outline"
            size={moderateScale(25)}
            color={Colors.white}
            style={styles.statusIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Divider Line */}
      <Divider />

      {/* Body Container */}
      <View style={styles.bodyContainer}>
        <TouchableOpacity>
          <Text style={styles.optionText}>My achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(30),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  profileIcon: {
    marginRight: moderateScale(15),
  },
  userDetails: {
    flex: 1,
    justifyContent: "center",
  },
  nameText: {
    fontSize: moderateScale(25),
    fontFamily: TYPOGRAPHY.medium,
    color: Colors.white,
    marginBottom: verticalScale(5),
  },
  emailText: {
    fontSize: moderateScale(14),
    fontFamily: TYPOGRAPHY.light,
    color: Colors.white,
  },
  editIcon: {
    padding: moderateScale(5),
  },
  statusIcon: {
    marginLeft: moderateScale(10),
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  optionText: {
    fontSize: moderateScale(20),
    color: Colors.white,
    marginBottom: moderateScale(30),
  },
  logoutText: {
    fontSize: moderateScale(16),
    color: Colors.red,
  },
});
