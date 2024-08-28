import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Divider from "../../../Component/Divider/Divider";
import ScreenHeader from "../../../Component/Header/ScreenHeader";
import { Colors } from "../../../Styles/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../Utils/Metrics";
import SuggestSupportMessageListItem from "../../../Component/ListItem/SuggestSupportMessageListItem";
import Icon from "react-native-vector-icons/FontAwesome5";

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={"Support"} icon={"face-agent"} />
      <Divider />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.messageContainer}>
          <Text style={styles.greetingText}>Hello 👋</Text>
          <Text style={styles.subText}>How can we help you?</Text>
        </View>

        <SuggestSupportMessageListItem />
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          placeholderTextColor={Colors.white}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="location-arrow" size={20} color={Colors.mainGreen} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    paddingHorizontal: horizontalScale(10),
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingBottom: verticalScale(20),
  },
  messageContainer: {
    marginBottom: verticalScale(20),
  },
  greetingText: {
    fontSize: moderateScale(24),
    color: Colors.white,
    fontWeight: "bold",
  },
  subText: {
    fontSize: moderateScale(18),
    color: Colors.white,
    marginTop: verticalScale(5),
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 20,
    marginBottom: verticalScale(20),
  },
  input: {
    flex: 1,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(15),
    color: Colors.white,
    backgroundColor: Colors.grey,
    opacity: 0.5,
    borderRadius: 10,
    marginRight: horizontalScale(10),
  },
  sendButton: {
    backgroundColor: Colors.grey,
    opacity: 0.5,
    padding: 10,
    borderRadius: 20,
  },
});
