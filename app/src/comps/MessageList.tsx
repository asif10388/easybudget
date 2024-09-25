import React, {useEffect, useState} from 'react';
import {formatDate} from '../helpers/formatDate';
import SmsAndroid from 'react-native-get-sms-android';
import {requestSMSPermission} from '../helpers/requestPermission';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';

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
  const [toggleButton, setToggleButton] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async () => {
      const granted = await requestSMSPermission();
      setToggleButton(granted);
    })();
  }, []);

  const listMessages = () => {
    const filter = {
      box: 'inbox',
      indexFrom: 0,
      maxCount: 100,
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      (fail: string) => console.log(`Failed with this error: ${fail}`),
      (count: number, messagelist: string) => {
        const parsedMessages: Message[] = JSON.parse(messagelist);

        const formattedMessages = parsedMessages
          .filter(
            (messageFilter: Message) =>
              messageFilter.address === 'EBL' ||
              messageFilter.address === 'bKash',
          )
          .map(newMessages => ({
            ...newMessages,
            date: formatDate(newMessages.date),
          }));
        setMessages(formattedMessages);
      },
    );
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {(messages?.length > 0 &&
        messages.map((item, index) => {
          return (
            <View key={index} style={styles.messegeContainer}>
              <Text style={styles.boldText}>{item.address}</Text>
              <Text>{item.body}</Text>
              <Text>{item.date}</Text>
            </View>
          );
        })) || (
        <View style={styles.messegeContainer}>
          <Text>No Messages Found</Text>
        </View>
      )}

      <Button
        onPress={toggleButton ? listMessages : requestSMSPermission}
        title={toggleButton ? 'List Messages' : 'Request SMS Permission'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },

  messegeContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'bisque',
  },
});

export default MessageList;
