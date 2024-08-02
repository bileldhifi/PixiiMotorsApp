import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '../Styles/colors'

export default class Setting extends Component {
  render() {
    return (
      <View style={{backgroundColor:Colors.globalBg}}>
        <Text>Setting</Text>
      </View>
    )
  }
}