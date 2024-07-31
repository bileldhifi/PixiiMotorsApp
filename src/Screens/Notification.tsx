import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NotificationListItem from "../Component/NotificationListItem";
import { Colors } from "../Styles/colors";

const Notification = () => {
  return (
    <View style={styles.container}>
      <NotificationListItem />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({ container: { flex: 1,backgroundColor : Colors.globalBg } });
