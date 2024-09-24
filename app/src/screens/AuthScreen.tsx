import React from 'react';
import Login from '../comps/Login';
import {StyleSheet, Text, View, Button} from 'react-native';

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthScreen;
