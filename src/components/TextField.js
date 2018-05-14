import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { TextField } from 'react-native-material-textfield';

export default class TextInput extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TextField
          //value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType || 'default'}
          autoCapitalize={this.props.autoCapitalize || 'sentence'}
          editable={this.props.editable}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});