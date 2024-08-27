import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
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
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      swipeDirection={"down"}
      onSwipeComplete={onClose}
      style={styles.modalGeneralContainer}

    >
        <View style={styles.modalContainer}>
          {/* Swipe Indicator */}
          <View style={styles.swipeIndicator} />

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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    alignItems: "center",
    flex: 0.7,
  },
  modalGeneralContainer: {
    justifyContent: "flex-end", // This anchors the modal to the bottom of the screen
    margin: 0, // Removes the default margin around the modal
  },
  contentContainer: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: moderateScale(25),
    marginVertical: verticalScale(20),
    fontFamily: TYPOGRAPHY.medium,
  },
  lockIcon: {
    marginVertical: 10,
  },
  description: {
    fontSize: moderateScale(14),
    textAlign: "center",
    marginVertical: verticalScale(20),
    color: Colors.black,
    fontFamily: TYPOGRAPHY.medium,
  },
  optionContainer: {
    borderColor: Colors.grey,
    borderWidth: 0.2,
    width: horizontalScale(250),
    paddingVertical: verticalScale(10),
    borderRadius: 10,
    marginVertical: 10,
  },
  optionText: {
    fontSize: moderateScale(14),
    fontFamily: TYPOGRAPHY.medium,
    color: Colors.grey,
  },
  contactText: {
    fontSize: 16,
    color: Colors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  swipeIndicator: {
    width: horizontalScale(100),
    height: 5,
    backgroundColor: Colors.grey,
    borderRadius: 2.5,
    alignSelf: "center",
    marginBottom: verticalScale(30),
  },
});
