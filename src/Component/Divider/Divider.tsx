import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { verticalScale } from '../../Utils/Metrics'

const Divider = () => {
  return (
    <LinearGradient
    colors={["#000000", "#5A5A5A", "#000000"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.divider}
  />
  )
}

export default Divider

const styles = StyleSheet.create({  divider: {
    height: 2, // Adjust the height as necessary
    width: "100%", // Full width
    marginVertical: verticalScale(30), // Adjust the vertical margin as necessary
  },})