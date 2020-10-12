/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Appcontainer from './src/AppNavigator';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import {withAuthenticator} from 'aws-amplify-react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Appcontainer />
    </SafeAreaView>
  );
};

// https://medium.com/javascript-in-plain-english/the-ultimate-guide-for-integrate-aws-amplify-authentication-for-react-native-15a8eec10890
export default App;
