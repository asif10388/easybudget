import React from 'react';
import Header from './Header';
import {primaryColor} from '../utils/colors';
import {LoginScreenProps} from 'types/routeParams';
import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';

const Login = (props: LoginScreenProps) => {
  const handleLogin = () => {
    console.log(props.navigation);
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>Log into your account</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>LOGIN</Text>
      </Pressable>

      <Pressable style={styles.buttonInverted}>
        <Text style={styles.textGreen}>FORGOT PASSWORD</Text>
      </Pressable>

      <View style={styles.switchToRegister}>
        <Text>Don't have an account? Click</Text>
        <Pressable>
          <Text>here</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  input: {
    padding: 10,
    fontSize: 20,
    marginTop: 5,
    borderWidth: 1,
    marginBottom: 5,
  },

  button: {
    padding: 10,
    backgroundColor: primaryColor,
  },

  buttonInverted: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: primaryColor,
  },

  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },

  textGreen: {
    fontSize: 20,
    color: primaryColor,
    textAlign: 'center',
  },

  switchToRegister: {
    gap: 5,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Login;
