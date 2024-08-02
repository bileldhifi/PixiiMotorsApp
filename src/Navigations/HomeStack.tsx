import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BatteryDetails from '../Screens/BatteryDetailsScreen';
import Home from '../Screens/HomeScreen';



const Stack = createStackNavigator();

export default class HomeStack extends Component {
  render() {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BatteryDetails" component={BatteryDetails} />
      </Stack.Navigator>
    )
  }
}