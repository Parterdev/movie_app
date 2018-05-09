import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import Home from './src/screens/Home';

export default class App extends Component {
  render() {
    return(
     <AppDrawerNavigator />
    )
  }
}

const AppDrawerNavigator = new DrawerNavigator ({
  Home: { screen: Home }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  }
});