import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  SafeAreaView,
  StyleSheet,
  UIManager,
  View,
} from "react-native";
import BatteryCard from "../Component/BatteryCard";
import HomeCard from "../Component/HomeCard";
import WeatherCard from "../Component/WeatherCard";
import { Colors } from "../Styles/colors";
import { horizontalScale, verticalScale } from "../Utils/Metrics";
import HomeHeader from "../Component/HomeHeader";
import ToggleButton from "../Component/ToggleButton";

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <SafeAreaView style={styles.Glcontainer}>
      <View style={styles.container}>
        <HomeHeader />
        <BatteryCard expanded={expanded} toggleExpanded={toggleExpanded} />
        {!expanded && (
          <>
            <View style={styles.cardContainer}>
              <View style={styles.leftPart}>
                <WeatherCard />
              </View>
              <View style={styles.rightPart}>
                <HomeCard
                  title="Track Location"
                  iconColor="#03A168"
                  icon="map-marker"
                />
                <View style={styles.spaceBetweenCard}></View>
                <HomeCard
                  title="Swap Station"
                  iconColor="#03A168"
                  icon="qrcode"
                />
              </View>
            </View>
            <ToggleButton />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Glcontainer: { backgroundColor: Colors.globalBg, flex: 1 },

  container: {
    flexDirection: "column",
    // justifyContent: "space-around",
    // marginRight: horizontalScale(5),
    paddingHorizontal: horizontalScale(15),
  },
  pixiiLogo: {
    resizeMode: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: verticalScale(10),
  },

  leftPart: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    marginRight: horizontalScale(10),
  },
  rightPart: {
    flex: 1,
    backgroundColor: Colors.globalBg,
    marginLeft: horizontalScale(10),
  },
  spaceBetweenCard: { height: verticalScale(20) },
});

export default Home;
