import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Login = React.lazy(() => import('../comps/Login'));

type AuthStackParamsType = {
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamsType>();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
