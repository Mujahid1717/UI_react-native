import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SignUp from './src/SignUp';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';

const App = () => {
  const stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown: false}}>
          <stack.Screen  name = 'home' component={Home}/>       
          <stack.Screen  name = 'signUp' component={SignUp}/>
          <stack.Screen  name = 'login' component={Login}/>
          <stack.Screen  name = 'forgotPassword' component={ForgotPassword}/>
        </stack.Navigator>
      </NavigationContainer>
  );
};
const styles = StyleSheet.create({


});
export default App;




