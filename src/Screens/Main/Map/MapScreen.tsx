import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenHeader from "../../../Component/Header/ScreenHeader";
import Divider from "../../../Component/Divider/Divider";
import { Colors } from "../../../Styles/colors";
import { horizontalScale } from "../../../Utils/Metrics";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={"Location"} icon={"map"} />
      <Divider />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    paddingHorizontal: horizontalScale(10),
  },
});
