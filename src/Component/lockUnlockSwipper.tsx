import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SwipeButton from 'rn-swipe-button';

const lockUnlockSwipper = () => {

    const [disableCBButton, setDisableCBButton] = useState(false)
    const defaultStatusMessage = 'swipe status appears here';
    const [swipeStatusMessage, setSwipeStatusMessage] = useState(
      defaultStatusMessage,  );
  return (
    <View>
      <Text>lockUnlockSwipper</Text>
    </View>
  )
}

export default lockUnlockSwipper

const styles = StyleSheet.create({})