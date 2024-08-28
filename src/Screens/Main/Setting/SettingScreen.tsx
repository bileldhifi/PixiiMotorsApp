import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Divider from '../../../Component/Divider/Divider'
import ScreenHeader from '../../../Component/Header/ScreenHeader'
import { Colors } from '../../../Styles/colors'
import { horizontalScale } from '../../../Utils/Metrics'
import SuggestSupportMessageListItem from '../../../Component/ListItem/SuggestSupportMessageListItem'

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={"Setting"} icon={"cog"}/>
      <Divider/>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.globalBg ,paddingHorizontal : horizontalScale(10)},
});