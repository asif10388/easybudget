import React from 'react';
import {Text, View, Button} from 'react-native';
import type {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IAuthProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Auth'>;
}

const Auth = ({navigation}: IAuthProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to Auth" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default Auth;
