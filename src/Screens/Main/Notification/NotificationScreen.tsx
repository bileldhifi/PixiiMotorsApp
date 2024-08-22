import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../Styles/colors";
import NotificationListItem from "../../../Component/Notification/NotificationListItem";

const Notification = () => {
  return (
    <View style={styles.container}>
      <NotificationListItem />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.globalBg },
});
