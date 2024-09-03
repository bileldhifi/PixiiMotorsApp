import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { ListItem } from "@rneui/themed";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TYPOGRAPHY } from "../../Constants/typography";
import { moderateScale, verticalScale } from "../../Utils/Metrics";
import { Colors } from "../../Styles/colors";

export default class NotificationListItem extends Component {
  render() {
    return (
      <ListItem.Swipeable
        containerStyle={{ backgroundColor: Colors.globalBg }}
        leftContent={(reset) => (
          <Button
            title="Info"
            onPress={() => reset()}
            icon={{ name: "info", color: "white" }}
            buttonStyle={{ minHeight: "100%" }}
          />
        )}
        rightContent={(reset) => (
          <Button
            title="Delete"
            onPress={() => reset()}
            icon={{ name: "delete", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
          />
        )}
        bottomDivider={true}
      >
        <View style={styles.container}>
          <Icon
            name="album"
            style={styles.mainIcon}
            color={Colors.cardIcon}
            size={moderateScale(15)}
          />
          <ListItem.Content style={styles.textWrapper}>
            <ListItem.Title style={styles.title}>
              New Achievement unlocked
            </ListItem.Title>
            <ListItem.Subtitle style={styles.subTitle}>
              You have saved $1000 on gas
            </ListItem.Subtitle>
            <Text style={styles.description}>23/07/2024 11:38</Text>
          </ListItem.Content>
          <Icon
            name="chevron-right"
            style={styles.chevronIcon}
            size={moderateScale(25)}
            color={Colors.primary}
          />
        </View>
      </ListItem.Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: TYPOGRAPHY.semiBold,
    color: Colors.primary,
    fontSize: moderateScale(18),
  },
  subTitle: {
    fontFamily: TYPOGRAPHY.light,
    color: Colors.grey,
    fontSize: moderateScale(13),
    marginTop: verticalScale(5),

  },
  description: {
    fontFamily: TYPOGRAPHY.light,
    color: Colors.grey,
    fontSize: moderateScale(13),
    marginTop: verticalScale(20),
  },
  mainIcon: {
    marginRight: 10,
    alignSelf: "flex-start",
  },
  textWrapper: {
    flex: 1,
  },
  chevronIcon: {
    alignSelf: "flex-start",
  },
});