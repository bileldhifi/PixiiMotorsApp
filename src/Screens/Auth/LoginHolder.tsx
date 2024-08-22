import React, { useState } from "react";
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
} from "../../Utils/Metrics";
import { Colors } from "../../Styles/colors";
import LinearGradient from "react-native-linear-gradient";
import { Screen } from "react-native-screens";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import { TYPOGRAPHY } from "../../Constants/typography";

// let currentScreen = "login";

const LoginHolder = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Get Started</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, isLoginScreen && styles.activeTab]}
            onPress={() => setIsLoginScreen(true)}
          >
            <Text
              style={[styles.tabText, isLoginScreen && styles.activeTabText]}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, !isLoginScreen && styles.activeTab]}
            onPress={() => setIsLoginScreen(false)}
          >
            <Text
              style={[styles.tabText, !isLoginScreen && styles.activeTabText]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {isLoginScreen ? <LoginScreen /> : <RegisterScreen />}
      </View>
    </View>
  );
};

export default LoginHolder;

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
    fontFamily: TYPOGRAPHY.semiBold,
    fontSize: moderateScale(40),
    color: Colors.primary,
    marginLeft: horizontalScale(30),
  },

  gradient: {
    borderRadius: 12,
  },

  inputWrapper: {
    flexDirection: "column",
    marginVertical: verticalScale(5),
  },
  textInput: {
    fontFamily: TYPOGRAPHY.medium,
    fontSize: moderateScale(13),
    color: Colors.grey,
    marginBottom: verticalScale(4),
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
    fontFamily: TYPOGRAPHY.medium,
  },
  forgotPasswordText: {
    color: Colors.blue,
    fontFamily: TYPOGRAPHY.semiBold,
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
    fontFamily: TYPOGRAPHY.medium,
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

  // tab style

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  tabText: {
    color: "black",
    fontSize: moderateScale(16),
  },
  tab: {
    flex: 1,
    paddingVertical: verticalScale(10),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F6F9",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  activeTabText: {
    color: "black",
    fontFamily: TYPOGRAPHY.semiBold,
  },
  activeTab: {
    backgroundColor: "white",
  },
});
