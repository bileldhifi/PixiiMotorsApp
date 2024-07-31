import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import SwipeButton from "rn-swipe-button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Utils/Metrics";
import { Fonts } from "../Styles/fonts";
import { Images } from "../Constants/image";
import { typography } from "../Constants/typography";

const ToggleButton = () => {
  const [isLocked, setIsLocked] = useState(true);
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: translateX }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) {
          setIsLocked(false);
        } else if (gestureState.dx < -50) {
          setIsLocked(true);
        }
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={[styles.button, styles.leftButton]}>
          <Image source={Images.pixiiLogo} style={styles.logo} />
        </View>
        <View style={[styles.button, styles.rightButton]}>
          {isLocked ? (
            <>
              <Icon name="lock" size={moderateScale(30)} color="black" />
              <Text style={styles.lockText}>Lock</Text>
            </>
          ) : (
            <>
              <Text style={styles.unlockText}>Unlock</Text>
              <Icon name="lock-open" size={moderateScale(30)} color="green" />
            </>
          )}
        </View>
      </View>
      <Animated.View
        style={[styles.swipeButton, { transform: [{ translateX }] }]}
        {...panResponder.panHandlers}
      >
        {isLocked ? (
          <Icon
            name="chevron-double-right"
            size={moderateScale(30)}
            color="white"
          />
        ) : (
          <Icon
            name="chevron-double-left"
            size={moderateScale(30)}
            color="white"
          />
        )}
      </Animated.View>
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: verticalScale(10),
    marginTop: verticalScale(10),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.cardIcon,
    borderRadius: moderateScale(10),
    overflow: "hidden",
    width: "100%",
  },
  button: {
    flex: 1,
    height: verticalScale(50),
    justifyContent: "center",
    alignItems: "center",
  },
  leftButton: {
    backgroundColor: "white",
  },
  rightButton: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode: "contain",
  },
  lockText: {
    color: "white",
    fontSize: Fonts.primary,
    fontFamily: typography.regular,
    marginLeft: horizontalScale(10),
  },
  unlockText: {
    color: "white",
    fontSize: Fonts.primary,
    fontFamily: typography.regular,
    marginRight: horizontalScale(10),
  },
  swipeButton: {
    position: "absolute",
    width: horizontalScale(50),
    height: verticalScale(50),
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(10),
  },
});
