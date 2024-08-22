import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {IMAGES} from '../Constants/image'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your App Title</Text>
      <Image
        source={IMAGES.SplashImage}
        style={styles.image}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
      image: {
        width: 100,
        height: 100,
      },
})