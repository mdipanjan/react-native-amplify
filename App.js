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
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import {withAuthenticator} from 'aws-amplify-react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>dfgfg</Text>
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);
