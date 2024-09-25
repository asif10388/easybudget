import React from 'react';
import Login from '../comps/Login';
import {StyleSheet, View} from 'react-native';
import {LoginScreenProps} from 'types/routeParams';

const LoginScreen: React.FC<LoginScreenProps> = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Login route={route} navigation={navigation} />
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

export default LoginScreen;
