import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Camera,
  CameraProps,
  Point,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera";
import ErrorCamera from "./ErrorCamera";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale, verticalScale } from "../Utils/Metrics";
import { Colors } from "../Styles/colors";
import Reanimated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

// zoom
Reanimated.addWhitelistedNativeProps({
  zoom: true,
});
const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);

const QrcodeScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [cameraFlash, setCameraFlash] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<"front" | "back">(
    "back"
  );
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    async function getPermission() {
      const permission = await requestPermission();
      console.log("Permission : ", permission);
    }
    getPermission();
  }, []);

  const device = useCameraDevice(cameraPosition);
  if (!hasPermission) return <ErrorCamera />;
  if (device == null) return <ErrorCamera />;

  // Qrcode scanner
  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  // gesture: zoom
  const zoom = useSharedValue(device.neutralZoom);
  const zoomOffset = useSharedValue(0);
  const pinchGesture = Gesture.Pinch()
    .onBegin(() => {
      zoomOffset.value = zoom.value;
      console.log("Zooming started");
    })
    .onUpdate((event) => {
      const z = zoomOffset.value * event.scale;
      const clampedZoom = Math.min(Math.max(z, device.minZoom), 5);
      zoom.value = clampedZoom;
      console.log(`Zoom value: ${zoom.value}`);
    });

  const animatedProps = useAnimatedProps<CameraProps>(
    () => ({ zoom: zoom.value }),
    [zoom]
  );

  // focus
  const camera = useRef<Camera>(null);
  const [focusPoint, setFocusPoint] = useState<Point | null>(null);

  const focus = useCallback((point: Point) => {
    const c = camera.current;
    if (c == null) return;
    c.focus(point);
    setFocusPoint(point);
  }, []);

  const tapGesture = Gesture.Tap().onEnd(({ x, y }) => {
    console.log("Focusing at :", { x, y });
    runOnJS(focus)({ x, y });
  });

  // Toggle flashlight
  const toggleFlash = () => {
    setCameraFlash((prevFlash) => !prevFlash);
  };

  // Toggle camera position
  const toggleCameraPosition = () => {
    setCameraPosition((prevPosition) =>
      prevPosition === "back" ? "front" : "back"
    );
  };

  return (
    <View style={styles.container}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <GestureDetector gesture={tapGesture}>
              <ReanimatedCamera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
                codeScanner={codeScanner}
                enableZoomGesture={true}
                animatedProps={animatedProps}
              />
            </GestureDetector>
          </GestureHandlerRootView>

          <View style={styles.iconWrapper}>
            <Pressable onPress={toggleFlash}>
              <Icon
                name={cameraFlash ? "flashlight" : "flashlight-off"}
                size={verticalScale(25)}
                style={styles.icon}
              />
            </Pressable>
            <Pressable onPress={toggleCameraPosition}>
              <Icon
                name="camera-switch"
                size={verticalScale(25)}
                style={styles.icon}
              />
            </Pressable>
            <Icon name="home" size={verticalScale(25)} style={styles.icon} />
          </View>
    </View>
  );
};

export default QrcodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconWrapper: {
    position: "absolute",
    top: verticalScale(10),
    right: moderateScale(10),
    flexDirection: "column",
  },
  icon: {
    color: "white",
    padding: verticalScale(7),
    backgroundColor: Colors.grey,
    marginVertical: verticalScale(10),
  },
});
