import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { horizontalScale } from "../Utils/Metrics";

import { createStackNavigator } from '@react-navigation/stack';



const ScanCodeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Scan Qr code"
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 3,
        }}
        containerStyle={styles.buttonWrapper}
        onPress={()=>navigation.navigate('QrcodeScreen')}
      />
    </View>
  );
};

export default ScanCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    width: "80%",
    marginVertical: 10,
  },
});
