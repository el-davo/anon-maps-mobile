import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { hashHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/store';
import { routes } from './app/routes';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Text>Hello Dude</Text>
      </Provider>
    );
  }
}
