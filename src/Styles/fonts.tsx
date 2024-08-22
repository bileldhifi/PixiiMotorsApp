import { StyleSheet, useWindowDimensions } from "react-native";
import { Colors } from "./colors";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Utils/Metrics";
import { TYPOGRAPHY } from "../Constants/typography";

export const Fonts = {
  primary: moderateScale(18),
  secondary:moderateScale(25),

  cardTitle: {
    fontWeight: moderateScale(300),
    fontSize: moderateScale(25),
  },
  cardSubTitle: {
    fontSize: moderateScale(20),
    fontWeight: moderateScale(30),
  },
  header: {
    fontSize: 10,
    fontWeight: 100,
  },
  subHeader: {
    fontSize: 10,
    fontWeight: 100,
    color: Colors.secondary,
  },
};
