import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../Styles/colors";
import NotificationListItem from "../../../Component/Notification/NotificationListItem";
import ScreenHeader from "../../../Component/Header/ScreenHeader";
import { horizontalScale } from "../../../Utils/Metrics";
import Divider from "../../../Component/Divider/Divider";

const Notification = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={"Notifications"} icon={"lock"}/>
      <Divider/>
      <NotificationListItem />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.globalBg ,paddingHorizontal : horizontalScale(10)},
});
