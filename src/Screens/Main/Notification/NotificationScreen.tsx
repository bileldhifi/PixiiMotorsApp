import React from "react";
import { StyleSheet, View } from "react-native";
import Divider from "../../../Component/Divider/Divider";
import ScreenHeader from "../../../Component/Header/ScreenHeader";
import NotificationListItem from "../../../Component/ListItem/NotificationListItem";
import { Colors } from "../../../Styles/colors";
import { horizontalScale } from "../../../Utils/Metrics";

const Notification = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={"Notifications"} icon={"bell"}/>
      <Divider/>
      <NotificationListItem />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.globalBg ,paddingHorizontal : horizontalScale(10)},
});
