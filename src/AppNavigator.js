import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import SignupScreen from './screens/signup';
import SigninScreen from './screens/signin';
const AppNavigator = createStackNavigator(
  {
    signup: {
      screen: SignupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    signin: {
      screen: SigninScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: true,
      gestureEnabled: true,
    },
  },
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
