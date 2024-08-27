import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode, useState } from "react";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";
import { Colors } from "../../Styles/colors";
import { TYPOGRAPHY } from "../../Constants/typography";

interface CustomModalProps {
  isVisible: boolean;
  onClose?: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      swipeDirection={"down"}
      onSwipeComplete={onClose}
    >
      <View style={styles.modalContainer}>
        {/* Profile Section */}

        {/* Forgot Password Section */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Forgot your password?</Text>
          <Icon name="lock" size={50} color="#000" style={styles.lockIcon} />
          <Text style={styles.description}>
            Choose where we can send you a code to insert in place of your old
            password
          </Text>

          <Text style={styles.optionText}>Via SMS</Text>
          <TouchableOpacity style={styles.optionContainer}>
            <Text style={styles.contactText}>+216 9******22</Text>
          </TouchableOpacity>

          <Text style={styles.optionText}>Via Email</Text>
          <TouchableOpacity style={styles.optionContainer}>
            <Text style={styles.contactText}>J****@email.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    alignItems: "center",
  },

  contentContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: moderateScale(25),
    marginBottom: verticalScale(10),
    fontFamily: TYPOGRAPHY.medium,
  },
  lockIcon: {
    marginVertical: 10,
  },
  description: {
    fontSize: moderateScale(16),
    textAlign: "center",
    marginVertical: verticalScale(10),
    color: Colors.black,
    fontFamily: TYPOGRAPHY.medium,
  },
  optionContainer: {
    borderColor: Colors.grey,
    borderWidth: 0.2,
    paddingHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(10),
    borderRadius: 10,
    marginVertical: 10,
  },
  optionText: {
    fontSize: moderateScale(15),
    fontFamily: TYPOGRAPHY.medium,
    color: Colors.grey,
  },
  contactText: {
    fontSize: 16,
    color: Colors.black,
  },
});
