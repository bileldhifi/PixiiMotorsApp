import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";
import AuthStack from "./AuthStack";

const Stackk = createStackNavigator();

const AppStack = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      <Stackk.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stackk.Screen name="BottomTab" component={BottomTab} />
        ) : (
          <Stackk.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stackk.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
