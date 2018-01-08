/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Enter Text : </Text>
        <TextInput
          style={{width: 200, height: 40}}/>
      </View>
    );
  }
}
