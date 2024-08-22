import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";
import { Colors } from "../../Styles/colors";
import { TYPOGRAPHY } from "../../Constants/typography";

type CustomHeaderProps = {
  icon: string;
  title: string;
};

const CustomTabHeader: React.FC<CustomHeaderProps> = ({ icon, title }) => {
  return (
    <SafeAreaProvider>
      <Header
        backgroundImageStyle={{}}
        barStyle="default"
        leftComponent={
          <View style={styles.leftContainer}>
            <Icon name={icon} size={moderateScale(30)} color={Colors.grey} />
            <Text style={styles.title}>{title}</Text>
          </View>
        }
        placement="left"
        linearGradientProps={{}}
        statusBarProps={{}}
        backgroundColor={Colors.globalBg}
        containerStyle={styles.headerContainer}
      />
    </SafeAreaProvider>
  );
};

export default CustomTabHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.globalBg,
    borderBottomWidth: 0,
    justifyContent: "center",
    flex: 1,
    marginTop: verticalScale(10),
    paddingLeft: 0,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 0,
  },
  title: {
    fontFamily: TYPOGRAPHY.medium,
    color: "white",
    fontSize: moderateScale(35),
    marginLeft: horizontalScale(10),
    paddingLeft: 0,
  },
});
