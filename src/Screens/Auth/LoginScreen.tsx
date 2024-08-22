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
import { TYPOGRAPHY } from "../../Constants/typography";
import { IMAGES } from "../../Constants/image";
import LinearGradient from "react-native-linear-gradient";
import { Screen } from "react-native-screens";
import { Link } from "@react-navigation/native";
import BottomTab from "../../Navigations/BottomTab";

const LoginScreen = ({ navigation }: any) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View style={styles.footer}>
      <View style={styles.inputWrapper}>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.textInput}>Password</Text>
        <View style={styles.passContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <Icon
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            style={styles.icon}
            onPress={() => setshowPassword(!showPassword)}
          />
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.rememberContainer}>
          <TouchableOpacity>
            <Icon name="checkbox-blank-outline" size={20} />
          </TouchableOpacity>
          <Text style={styles.rememberText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#5F5CFF", "#4E4AFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("QrcodeScreen");
          }}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>Or</Text>
        <View style={styles.separator} />
      </View>
      <TouchableOpacity style={styles.googleButton}>
        <Image source={IMAGES.googleLogo} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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
    borderTopLeftRadius: 15,
  },
  textHeader: {
    fontFamily: TYPOGRAPHY.semiBold,
    fontSize: moderateScale(40),
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
    fontFamily: TYPOGRAPHY.medium,
    fontSize: moderateScale(13),
    color: Colors.grey,
    marginBottom: verticalScale(4),
  },
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
});
