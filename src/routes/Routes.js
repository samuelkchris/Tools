import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/LoginScreen.js';
import SignUpScreen from '../pages/SignUpScreen.js';
import WelcomeScreen from '../pages/WelcomeScreen.js';
import HomeScreen from "../pages/HomeScreen";

const Stack = createStackNavigator();

export default function Routes() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome'>
              <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
              <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
              <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
              <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}