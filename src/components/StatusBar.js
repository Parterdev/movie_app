import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

export default class StatusBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#29313C'
          barStyle='light-content'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});