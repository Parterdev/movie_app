import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { Button, Icon } from 'react-native-elements';

export default class Buttons extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end', marginLeft: 20, marginRight: 20, marginBottom: 40 }}>
        <TouchableOpacity>
          <Button
            title="Iniciar sesión"
            color='#FFFFFF'
            buttonStyle={{
             backgroundColor: 'rgba(255,255,255,.3)',
              borderColor: 'transparent',
              height: 45,
              borderRadius: 5
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookForm} activeOpacity={0.5}>
          <Image
            source={require('../resources/facebook_icon.png')}
            style={styles.imageFacebook} 
          />
          <View style={{backgroundColor: '#FFFFFF', width: 2, height: 42, opacity: 0.5 }} />
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginRight: 35 }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>Iniciar sesión con Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  facebookForm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,.3)',
    height: 45,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5
  },
  imageFacebook: {
    padding: 10,
    margin: 10,
    height: 30,
    width: 30,
    resizeMode: 'stretch'
  }
});
