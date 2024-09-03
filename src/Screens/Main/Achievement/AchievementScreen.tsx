import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AchievementCard from "../../../Component/Card/AchievementCard";
import { Colors } from "../../../Styles/colors";
import { horizontalScale } from "../../../Utils/Metrics";
import ScreenHeader from "../../../Component/Header/ScreenHeader";
import Divider from "../../../Component/Divider/Divider";

const AchievementScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={"My Acheivements"} icon={""} />
      <Divider />
      <ScrollView>
        <AchievementCard
          title={"Ride 5 000 Km"}
          badgeText={"Silver Badge"}
          descriptionText={"Earned 24/07/2024"}
          value={0.6}
          done={true}
        />
        <AchievementCard
          title={"Ride 5 000 Km"}
          badgeText={"Silver Badge"}
          descriptionText={"Earned 24/07/2024"}
          value={0.6}
          done={false}
        />
      </ScrollView>
    </View>
  );
};

export default AchievementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    paddingHorizontal: horizontalScale(10),
  },
});
