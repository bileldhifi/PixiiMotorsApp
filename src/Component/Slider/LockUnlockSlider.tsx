/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Dimensions, Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = SCREEN_WIDTH * 0.8;
const SLIDER_BUTTON_SIZE = 60;

const LockUnlockSlider = () => {
    const [isLocked, setIsLocked] = useState(true);
    const pan = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            if (gestureState.dx >= 0 && gestureState.dx <= SLIDER_WIDTH - SLIDER_BUTTON_SIZE) {
                pan.setValue({ x: gestureState.dx, y: 0 });
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if (gestureState.dx > SLIDER_WIDTH / 4) {
                Animated.spring(pan, {
                    toValue: { x: SLIDER_WIDTH - SLIDER_BUTTON_SIZE, y: 0 },
                    useNativeDriver: false,
                }).start(() => {
                    setIsLocked(false);
                });
            } else {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start(() => {
                    setIsLocked(true);
                });
            }
        },
    });

    return (
        <View style={styles.container}>
            <View style={[styles.track, isLocked ? styles.trackLocked : styles.trackUnlocked]}>
                <Animated.View
                    style={[styles.sliderButton, { transform: [{ translateX: pan.x }] }]}
                    {...panResponder.panHandlers}
                >
                    {isLocked ? (
                        <Image source={require('../../assets/images/SliderOpen.png')} style={styles.buttonIcon} />
                    ) : (
                        <Image source={require('../../assets/images/lock.png')} style={styles.buttonIcon} />
                    )}
                </Animated.View>
                <View style={styles.textContainer}>
                    {isLocked ? (
                        <>
                            <Text style={styles.unlockText}>Unlock</Text>
                            <Image source={require('../../assets/images/lock-open.png')} style={styles.icon} />
                        </>
                    ) : (
                        <>
                            <Image source={require('../../assets/images/leftArrow.png')} style={styles.icon} />
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
        marginVertical: 20,
    },
    track: {
        width: 380,
        height: 80,
        borderRadius: 8,
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    trackLocked: {
        backgroundColor: '#2D2D2D',
        borderWidth: 2, // Added border width
        borderStartColor: '#fff', // Added border color
    },
    trackUnlocked: {
        backgroundColor: '#000',
        borderWidth: 2, // Added border width
        borderEndColor: '#fff', // Added border color
    },
    sliderButton: {
        position: 'relative',
        width: 100,
        height: 75,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2.62,
        elevation: 4,
        borderBlockStartColor: '#fff',

    },
    buttonIcon: {
        width: 40, // Adjust to your image size
        height: 40,
        resizeMode: 'contain',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: SLIDER_BUTTON_SIZE + 20,
        right: 200,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    lockText: {
        color: '#fff',
        fontSize: 13,
        marginRight: 8,
    },
    unlockText: {
        color: '#00ff00',
        fontSize: 18,
        marginRight: 250,

    },
});

export default LockUnlockSlider;