import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../Utils/Metrics";
import { Colors } from "../../../Styles/colors";
import Divider from "../../../Component/Divider/Divider";
import { TYPOGRAPHY } from "../../../Constants/typography";
import Button from "../../../Component/Button/Button";
import CustomModal from "../../../Component/Modal/CustomModal";

const ProfileEditScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Profile Picture */}
        <View style={styles.profilePicContainer}>
          <Icon
            name="account"
            size={moderateScale(100)}
            color={Colors.white}
            style={styles.profileIcon}
          />
          <TouchableOpacity style={styles.editButton}>
            <Icon
              name="pencil-outline"
              size={moderateScale(20)}
              color={Colors.black}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>

        <Divider />
        {/* Information Section */}
        <Text style={styles.headerText}>My Informations</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Flen Fouleni" // Replace with dynamic data if needed
              placeholderTextColor={Colors.white}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Flen.fouleni@gmail.com" // Replace with dynamic data if needed
              placeholderTextColor={Colors.white}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="+216 9911222"
              placeholderTextColor={Colors.white}
            />
          </View>
          <Text style={styles.passwordTitleText}>Change Password</Text>

          <View style={[styles.inputContainer, styles.passwordInputContainer]}>
            <TextInput
              style={styles.input}
              placeholder="Old Password/Verification Code"
              placeholderTextColor={Colors.white}
            />
            <Icon
              name="help-circle-outline"
              size={30}
              color={Colors.white}
              style={styles.iconStyle}
              onPress={toggleModal}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm New Password"
              placeholderTextColor={Colors.white}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor={Colors.white}
            />
          </View>

          <Button text="Save" />
        </View>
      </ScrollView>
      <CustomModal isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

export default ProfileEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: horizontalScale(10),
  },
  profilePicContainer: {
    alignItems: "center",
  },
  profileIcon: { alignSelf: "center" },
  editIcon: { margin: 0, padding: 0 },
  profilePic: {},
  editButton: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.mainGreen,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: Colors.white,
    fontSize: moderateScale(28),
    fontFamily: TYPOGRAPHY.regular,
    marginBottom: verticalScale(30),
  },
  inputContainer: {
    marginBottom: verticalScale(15),
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.inputBackground,
    borderRadius: 10,
    paddingHorizontal: horizontalScale(10),
  },
  label: {
    color: Colors.grey,
    fontFamily: TYPOGRAPHY.regular,
    fontSize: moderateScale(20),
    marginBottom: verticalScale(10),
  },
  input: {
    flex: 1,
    backgroundColor: Colors.inputBackground,
    fontFamily: TYPOGRAPHY.light,
    borderRadius: 10,
    height: verticalScale(60),
    color: "white",
    paddingHorizontal: horizontalScale(10),
  },
  passwordTitleText: {
    color: Colors.grey,
    fontSize: moderateScale(28),
    fontFamily: TYPOGRAPHY.regular,
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
  },
  iconStyle: {
    marginLeft: horizontalScale(10),
  },
});
