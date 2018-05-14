import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import TextField from '../components/TextInput';

export default class Login extends Component {

  //Initial states. 
  state = { androidAlertButton: false };

  //Functions. 
  showAlertAndroid = () => {
    Alert.alert(
      'Upss...',
      'Building component'
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={{ flex: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
        <Image 
          style={{ width: 150, height: 150, backgroundColor: 'white' }}
          source={{ uri: "https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/017/full/course_image.png" }}
        /> 
        </View>
        <View style={styles.inputContainer}>
          <TextField
            placeholder={'User'}
            placeholderTextColor='grey'
            editable={true}
            autoCapitalize={'none'}
            underlineColorAndroid='#25ACE1'
          />
          <TextField
            placeholder={'Password'}
            placeholderTextColor='grey'
            editable={true}
            autoCapitalize={'none'}
            secureTextEntry={true}
            underlineColorAndroid='#25ACE1'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.showAlertAndroid}
            title={'Iniciar sesión'}
            color={'#25ACE1'}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column'
  },
  inputContainer: {
    margin: 20,
    marginTop: 20
  },
  buttonContainer: {
    margin: 25
  }
});