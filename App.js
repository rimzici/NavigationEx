/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import RootStack from './RootStack';

export default class App extends Component<{}> {
  render() {
    return (
     <RootStack/>
    );
  }
}
