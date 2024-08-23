import React from 'react';
import Toast from 'react-native-toast-message'; 
import { verticalScale } from '../../Utils/Metrics';

export const showToast = (
  type: 'success' | 'error' | 'info', 
  text1: string, 
  text2?: string, 
  visibilityTime?: number
) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
    position: 'bottom', 
    visibilityTime: visibilityTime || 4000, 
    autoHide: false, 
    bottomOffset: verticalScale(50), 
  });
};

const ToastComponent = () => {
  return <Toast />; 
};

export default ToastComponent; 
