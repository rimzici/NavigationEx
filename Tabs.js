/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
	Text,
	View
} from 'react-native';


const TabOne = () => (
	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	  <Text>Tab One</Text>
	</View>
);
  
const TabTwo = () => (
	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	  <Text>Tab One</Text>
	</View>
);

const TabNav = TabNavigator({
	TabOne: {
	  screen: TabOne,
	},
	TabTwo: {
		screen: TabTwo,
	},
});

class Tabs extends Component<{}> {
	render() {
		return (
			<TabNav onNavigationStateChange={(prev, cur) => {console.log('onNavigationStateChange TabNav')}}/>
		)
	}
}
  
export default Tabs;