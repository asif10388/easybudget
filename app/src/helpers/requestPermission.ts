import {PermissionsAndroid} from 'react-native';

const PermissionParams = {
  buttonPositive: 'OK',
  title: 'SMS Permission',
  buttonNegative: 'Cancel',
  buttonNeutral: 'Ask Me Later',
  message: 'This app needs access to your SMS',
};

export const requestSMSPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      PermissionParams,
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.error(err);
    return false;
  }
};
