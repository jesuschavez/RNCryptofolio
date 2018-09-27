/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          //this is where chart component will be
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
