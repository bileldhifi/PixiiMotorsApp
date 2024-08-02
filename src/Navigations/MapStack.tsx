import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Map from '../Screens/MapScreen'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default class MapStack extends Component {
  render() {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    )
  }
}