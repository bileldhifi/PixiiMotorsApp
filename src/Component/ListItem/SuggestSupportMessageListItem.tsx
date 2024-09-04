import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../Styles/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Metrics";
import { TYPOGRAPHY } from "../../Constants/typography";

const DATA = [
  {
    id: "1",
    Suggest: "Call Support",
    Response: "Waiting for Agent to assist you",
  },
  { id: "2", Suggest: "Common Problem 1", Response: "Response for problem 1" },
  { id: "3", Suggest: "Common Problem 2", Response: "Response for problem 2" },
  { id: "4", Suggest: "Common Problem 3", Response: "Response for problem 3" },
];

const SuggestSupportMessageListItem = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
      <Text style={styles.suggestionText}>{item.Suggest}</Text>
    </TouchableOpacity>
  );

  const handleSelect = (item: any) => {
    console.log("Selected suggestion:", item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: Colors.black,
    borderColor: Colors.mainGreen,
    borderWidth: 0.5,
    borderRadius: 15,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    marginHorizontal: horizontalScale(5),
  },
  suggestionText: {
    fontSize: moderateScale(16),
    fontFamily: TYPOGRAPHY.regular,
    color: Colors.mainGreen,
  },
});

export default SuggestSupportMessageListItem;
