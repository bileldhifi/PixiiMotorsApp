import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Dimensions, Image } from 'react-native';
import { IMAGES } from '../../Constants/image';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = SCREEN_WIDTH * 0.8;
const SLIDER_BUTTON_SIZE = 150;

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
        marginVertical: 10,
    },
    track: {
        width: SLIDER_WIDTH,
        height: 75,
        borderRadius: 8,
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
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
        width: SLIDER_BUTTON_SIZE,
        height: SLIDER_BUTTON_SIZE,
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
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 10,
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 2,
    },
    lockText: {
        color: '#fff',
        fontSize: 13,
        margin: 8,
    },
    unlockText: {
        color: '#767676',
        fontSize: 13,
        marginLeft: 5,
    },
});

export default LockUnlockSlider;
