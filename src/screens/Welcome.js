import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import Buttons from '../components/Buttons';

import { Button }  from 'react-native-elements';
import Swiper from 'react-native-swiper';

export default class Welcome extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}
        dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 9, height: 9, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
        activeDot={<View style={{ backgroundColor: '#FFFFFF', width: 11, height: 11, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
        paginationStyle={{ bottom: 185 }}
        loop={true}>
        <View style={styles.screenOne}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <Image style={{ width: 200, height: 200 }}
              source={require('../resources/movie_icon.png')} 
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', marginTop: 40 }}>Bienvenido</Text>
          </View>
          <Buttons />
        </View>
        <View style={styles.screenTwo}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 110 }}>
            <Image style={{ width: 200, height: 200 }}
              source={require('../resources/movie_icon.png')}
            />
            <Text style={{ fontSize: 25, color: '#FFFFFF', marginTop: 40 }}>Aún no tienes una cuenta?</Text>
          </View>
          <TouchableOpacity>
            <Button
              title="Regístrate"
              color='#FFFFFF'
              buttonStyle={{
                backgroundColor: 'rgba(255,255,255,.3)',
                borderColor: 'transparent',
                height: 45,
                borderRadius: 5
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 20 }}>
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
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
wrapper: {
  backgroundColor: '#29313C'
},
screenOne: {
  flex: 1,
  backgroundColor: '#29313C',
},
screenTwo: {
  flex: 1,
  backgroundColor: '#29313C',
  justifyContent: 'flex-end', 
  marginLeft: 20, 
  marginRight: 20, 
  marginBottom: 40
}
});