import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Touchable,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Mapbox from "@rnmapbox/maps";
import { Colors } from "../../../Styles/colors";
import { IMAGES } from "../../../Constants/image";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { horizontalScale, verticalScale } from "../../../Utils/Metrics";

// Static charge stations data with a single image used for all
const chargeStations = [
  { id: "station1", coordinate: [-122.4324, 37.18825] },
  { id: "station2", coordinate: [-122.435, 37.79] },
];

const MapScreen = () => {
  const [showStation, setShowStation] = useState(true);
  const triggerStation = () => {
    setShowStation(!showStation);
  };
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Mapbox.MapView
          zoomEnabled={true}
          rotateEnabled={true}
          logoEnabled={false}
          compassEnabled={true}
          scaleBarEnabled={false}
          style={styles.map}
          styleURL="mapbox://styles/bileldhifi123/cm0p64qad00il01qoaka735as"
        >
          <Mapbox.Camera
            zoomLevel={8}
            centerCoordinate={[-122.4324, 37.78825]}
          />
          {showStation &&
            chargeStations.map((station) => (
              <Mapbox.PointAnnotation
                key={station.id}
                id={station.id}
                coordinate={station.coordinate}
              >
                <View style={styles.marker}>
                  <Icon name={"check-bold"} size={25} />
                </View>
              </Mapbox.PointAnnotation>
            ))}
        </Mapbox.MapView>

        <LinearGradient
          colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"]}
          style={styles.insetShadowTop}
        />

        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
          style={styles.insetShadowBottom}
        />
        <Pressable
          onPress={triggerStation}
          style={styles.showHideButtonContainer}
        >
          <Image
            source={IMAGES.hideShowStationButton}
            style={[{ opacity: showStation ? 1 : 0.5 },styles.showHideImage]}
          />
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.globalBg,
  },
  mapContainer: {
    flex: 5,
    position: "relative",
  },
  map: {
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: Colors.black,
    flex: 2,
  },
  insetShadowTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    pointerEvents: "none",
  },
  insetShadowBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    pointerEvents: "none",
  },
  marker: {
    alignItems: "center",
    justifyContent: "center",
  },
  markerImage: {
    width: 40,
    height: 40,
  },
  showHideButtonContainer: {
    alignItems: "center",
    position : 'absolute',
    alignSelf : 'center',
    bottom : 0,
  },
  showHideImage:{
    height : horizontalScale(50),
    width : verticalScale(50),
  }
});

export default MapScreen;
