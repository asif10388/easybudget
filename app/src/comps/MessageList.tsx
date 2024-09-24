import React from 'react';
import {useStore} from '../state/store';
import SmsAndroid from 'react-native-get-sms-android';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';

type Message = {
  id: string;
  body: string;
  date: string;
  read: number;
  address: string;
  date_sent: string;
  service_center: string;
};

const MessageList = () => {
  const [sms, setSMS] = React.useState<any>([]);
  //   const {sms, setSMS} = useStore((state: any) => state.sms());

  const requestSMSPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'SMS Permission',
          message: 'This app needs access to your SMS',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('SMS permission granted');
      } else {
        console.log('SMS permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const formatDate = (date: string) => {
    const d = new Date(parseInt(date, 10));
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  const listSMS = () => {
    console.log('listSMS');

    const filter = {
      box: 'inbox',
      indexFrom: 0,
      maxCount: 100,
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      (fail: string) => {
        console.log(`Failed with this error: ${fail}`);
      },

      (count: number, smsList: string) => {
        const parsedSMS: Message[] = JSON.parse(smsList);

        const formattedSMS = parsedSMS
          .filter(
            (smsFilter: Message) =>
              smsFilter.address === 'EBL' || smsFilter.address === 'bKash',
          )
          .map(newSms => ({
            ...newSms,
            date: formatDate(newSms.date),
          }));

        console.log('formattedSMS', formattedSMS);

        setSMS(formattedSMS);
      },
    );
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>No SMS</Text>
      {/* {sms?.length > 0 ? (
        sms.map(
          (
            item: {body: string; address: string; date: string},
            index: number,
          ) => {
            return (
              <View key={index} style={styles.messegeContainer}>
                <Text style={styles.boldText}>
                  SMS {index} : {item.address}
                </Text>
                <Text>{item.body}</Text>
                <Text>{item.address}</Text>
                <Text>{item.date}</Text>
              </View>
            );
          },
        )
      ) : (
        <Text>No SMS {sms2}</Text>
      )} */}

      <Button title="Request SMS Permission" onPress={requestSMSPermission} />
      <Button title="Read SMS" onPress={listSMS} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
  messegeContainer: {
    backgroundColor: 'bisque',
    margin: 10,
    padding: 10,
  },
});

export default MessageList;
