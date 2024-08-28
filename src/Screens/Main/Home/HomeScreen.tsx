import React, { useState } from "react";
import {
  Image,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  UIManager,
  View,
} from "react-native";
import BatteryCard from "../../../Component/Main/BatteryCard";
import HomeCard from "../../../Component/Main/HomeCard";
import HomeHeader from "../../../Component/Main/HomeHeader";
import WeatherCard from "../../../Component/Main/WeatherCard";
import { IMAGES } from "../../../Constants/image";
import { Colors } from "../../../Styles/colors";
import { horizontalScale, verticalScale } from "../../../Utils/Metrics";
import SwipeButton from "rn-swipe-button";
import LockUnlockSlider from "../../../Component/Slider/LockUnlockSlider";
const HomeScreen = () => {
  const [expanded, setExpanded] = useState(false);
  const [lock, setLock] = useState(false);

  const lockUnlock = () => {
    setLock(!lock);
  };

  // animation
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
      <ScrollView>
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
              {/* <SwipeButton
              Icon={
                <Image
                  source={require("../../Assets/Img/pixiiLogo.png")}
                  style={{ height: 40, width: 40}}
                />
              }
              onComplete={() => lockUnlock()}
              title={lock? 'Lock' : 'Unlock'}
              goBackToStart={true}
              borderRadius={10}
              underlayStyle={{ backgroundColor: Colors.globalBg }}
              circleBackgroundColor={Colors.primary}
              // containerStyle={{backgroundColor : 'grey'}}
            /> */}
              {/* <SwipeButton
              railBackgroundColor={Colors.globalBg}
              railStyles={styles.rail}
              thumbIconStyles={styles.thumbIcon}
              railFillBackgroundColor={Colors.globalBg}
              onComplete={() => console.log("done")}
              title="Swipe to complete"
              titleStyles={styles.title}
              railBorderRadius={10}
              thumbIconBorderRadius={10}
              shouldResetAfterSuccess= {true}
            /> */}
            </>
          )}
          {/* <LockUnlockSlider/> */}
        </View>
      </ScrollView>
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
    marginVertical: verticalScale(10),
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

  // swiper button style :
  rail: {
    borderRadius: 10,
    height: 50, // Adjust as needed
  },
  thumbIcon: {
    borderRadius: 10,
    width: "30%",
  },
  icon: {
    height: "100%", // Ensure the image fits the thumb icon
    width: "100%",
    resizeMode: "contain", // Maintain aspect ratio
  },
  title: {
    color: "#000", // Example title color
    fontSize: 16, // Example title size
  },
});

export default HomeScreen;
