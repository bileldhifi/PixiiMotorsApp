import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Utils/Metrics";
import { Colors } from "../Styles/colors";
import { typography } from "../Constants/typography";
import { Images } from "../Constants/image";
import LinearGradient from "react-native-linear-gradient";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Get Started</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.activeTabText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nameLastNameWrapper}>
          <View style={styles.nameWrapper}>
            <Text style={styles.textInput}>First Name</Text>
            <TextInput style={styles.input} placeholder="First Name" />
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.textInput}>Last Name</Text>
            <TextInput style={styles.input} placeholder="Last Name" />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email address"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.textInput}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.textInput}>Password</Text>

          <View style={styles.passContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
            <Icon name="eye-outline" size={20} style={styles.icon} />
          </View>
        </View>

        <LinearGradient
          colors={["#5F5CFF", "#4E4AFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        >
          <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.globalBg,
  },
  header: {
    flex: 1,
    // justifyContent: "center",
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  footer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    flex: 3,
    borderTopLeftRadius: 15,
  },
  textHeader: {
    fontFamily: typography.semiBold,
    fontSize: moderateScale(35),
    color: Colors.primary,
    marginLeft: horizontalScale(30),
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: verticalScale(20),
  },
  gradient: {
    borderRadius: 12,
  },
  nameWrapper: { flex: 1 },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: verticalScale(10),
  },
  activeTab: {
    backgroundColor: "grey",
  },
  inputWrapper: {
    flexDirection: "column",
    marginVertical: verticalScale(5),
  },
  textInput: {
    fontFamily: typography.medium,
    fontSize: moderateScale(13),
    color: Colors.grey,
    marginBottom: verticalScale(4),
  },
  nameLastNameWrapper: { flexDirection: "row" },
  tabText: {
    color: "#aaa",
    fontSize: moderateScale(16),
  },
  activeTabText: {
    color: "#000",
    fontSize: moderateScale(16),
  },
  input: {
    width: "100%",
    height: verticalScale(50),
    borderRadius: 12,
    borderColor: "#E3E3E3",
    borderWidth: 1,
    paddingHorizontal: horizontalScale(10),
    marginBottom: verticalScale(10),
  },
  passContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: verticalScale(10),
  },
  icon: {
    position: "absolute",
    right: horizontalScale(10),
    color: "#000",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: verticalScale(20),
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    marginLeft: horizontalScale(5),
    color: Colors.grey,
    fontFamily: typography.medium,
  },
  forgotPasswordText: {
    color: Colors.blue,
    fontFamily: typography.semiBold,
    fontSize: moderateScale(13),
  },
  loginButton: {
    width: "100%",
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontFamily: typography.medium,
    fontSize: moderateScale(15),
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: verticalScale(20),
    marginVertical: verticalScale(20),
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  separatorText: {
    marginHorizontal: horizontalScale(10),
    color: "#ccc",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    borderRadius: 12,
    borderColor: "#E3E3E3",
    borderWidth: 1,
  },
  googleIcon: {
    marginRight: horizontalScale(10),
    color: "#4a90e2",
    height: verticalScale(18),
    width: horizontalScale(18),
  },
  googleButtonText: {
    color: Colors.black,
    fontWeight: "bold",
  },
});
