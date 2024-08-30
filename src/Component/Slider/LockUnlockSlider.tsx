import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IMAGES } from '../../Constants/image';

const LockUnlockSlider = () => {
  const [isLocked, setIsLocked] = useState(true);
  const pan = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];

  const SLIDER_WIDTH = wp('90%');
  const SLIDER_BUTTON_SIZE = wp('30%');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      // Restrict movement within the slider width
      if (gestureState.dx >= 0 && gestureState.dx <= SLIDER_WIDTH - SLIDER_BUTTON_SIZE) {
        pan.setValue({ x: gestureState.dx, y: 0 });
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      // Trigger unlock if dragged beyond the threshold
      if (gestureState.dx > SLIDER_WIDTH / 4) {
        setIsLocked(false);
        Animated.spring(pan, {
          toValue: { x: SLIDER_WIDTH - SLIDER_BUTTON_SIZE, y: 0 },
          useNativeDriver: false,
          friction: 6,
          tension: 80,
        }).start();
      } else {
        setIsLocked(true);
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
          friction: 6,
          tension: 20,
        }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      {/* Attach PanResponder handlers to the parent view */}
      <View
        style={[styles.track, isLocked ? styles.trackLocked : styles.trackUnlocked, { width: SLIDER_WIDTH }]}
        {...panResponder.panHandlers}
      >
        <Animated.View
          style={[styles.sliderButton, { transform: [{ translateX: pan.x }] }]}
        >
          {isLocked ? (
            <Image source={IMAGES.pixiiLogo} style={styles.buttonIcon} />
          ) : (
            <Image source={IMAGES.Lock} style={styles.buttonIcon} />
          )}
        </Animated.View>
        <View style={styles.textContainer}>
          {isLocked ? (
            <>
              <Text style={styles.unlockText}>Unlock</Text>
              <Image source={IMAGES.LockOpen} style={styles.icon} />
            </>
          ) : (
            <>
              <Image source={IMAGES.arrow} style={styles.icon} />
              <Text style={styles.lockText}>Lock</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: hp('2%'),
    position: 'relative',
  },
  track: {
    height: hp('10%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
    position: 'relative',
  },
  trackLocked: {
    backgroundColor: '#2D2D2D',
    borderWidth: 0.3,
    borderColor: '#fff',
  },
  trackUnlocked: {
    backgroundColor: '#000',
    borderWidth: 0.3,
    borderColor: '#fff',
  },
  sliderButton: {
    position: 'relative',
    width: wp('30%'),
    height: hp('10%'),
    borderRadius: wp('3%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonIcon: {
    width: wp('10%'),
    height: hp('5%'),
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: wp('20%'),
    right: wp('5%'),
  },
  icon: {
    width: wp('8%'),
    height: hp('4%'),
    resizeMode: 'contain',
    margin: wp('1%'),
  },
  lockText: {
    color: '#fff',
    fontSize: wp('3.5%'),
    margin: wp('2%'),
  },
  unlockText: {
    color: '#767676',
    fontSize: wp('3.5%'),
    marginLeft: wp('30%'),
    marginRight: wp('18%'),
  },
});

export default LockUnlockSlider;
