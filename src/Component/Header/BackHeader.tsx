// CustomHeader.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../Styles/colors"; // Adjust the path as needed
import { IMAGES } from "../../Constants/image";
import { horizontalScale, verticalScale } from "../../Utils/Metrics";

interface BackHeaderProps  {
title ?: string,
showBackButton : boolean
}
const BackHeader: React.FC<BackHeaderProps>  = ({ title, showBackButton }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {/* Back button (conditionally rendered) */}
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={IMAGES.backArrow} 
            style={styles.backArrowImage}
          />
        </TouchableOpacity>
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.black,
    marginHorizontal : horizontalScale(10)
  },
  backButton: {
    paddingTop: 10,
  },
  backArrowImage: {
    tintColor: Colors.white,
    width: horizontalScale(80),
    height: verticalScale(40), 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
});

export default BackHeader;
