/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Tabs from './Tabs';
  
const Stack = StackNavigator({
	Tabs: {
		screen: Tabs,
	},
});

class RootStack extends Component<{}> {
	render() {
		return (
			<Stack onNavigationStateChange={(prev, cur) => {console.log('onNavigationStateChange Stack')}}/>
		)
	}
}
  
export default RootStack;