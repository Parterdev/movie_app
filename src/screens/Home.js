import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import Highlights from '../components/Hightlights';

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Header style={styles.headerForm}>
          <TouchableOpacity>
            <Left style={{ marginTop: 20 }}>
              <Icon name="md-menu" style={{ color: '#FFFFFF' }} 
              />
            </Left>
          </TouchableOpacity>
          <TouchableOpacity>
            <Right style={{ marginBottom: 20 }}>
              <Icon name="md-cart" style={{ color: '#FFFFFF'}}
              />
            </Right>
          </TouchableOpacity>
        </Header>
        <View style={styles.categories}>
          <TouchableOpacity>
            <View style={styles.categoriesForm}>
              <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' }}>Selecciona</Text>
              <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>Categorías</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.searchForm}>
            <Item>
              <Icon name="search" style={{ fontSize: 20, color: "#FFFFFF", paddingTop: 1 }} 
              />
              <Input placeholder="Buscar" style={{ color: '#FFFFFF' }} />
            </Item>
          </View>
        </View>
        <Content style={{ backgroundColor: '#FFFFFF', marginTop: 66 }}>
          <View style={styles.userForm}>
            <Text style={{ color: '#000000', fontSize: 14, margin: 5 }}>Hola, Usuario</Text>
            <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <Text style={{ color: '#000000', fontSize: 14 }}>Ir a tu cuenta </Text>
                <Icon name='arrow-forward' style={{ fontSize: 20 }} 
                />
              </TouchableOpacity>
            </View>
          </View>
          <Swiper 
            autoplay={true} dotColor={'#FFFFFF'} style={{ height: 115, backgroundColor: '#000000' }}>
            <View style={{ flex: 1 }}>
              <Image 
                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                source={require('../resources/ctl_1.jpg')} 
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image 
                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                source={require('../resources/swiper1.jpg')}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image 
                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                source={require('../resources/ctl_3.jpg')} 
              />
            </View>
          </Swiper>
          <Card style={{ marginLeft: 3, marginRight: 3, alignItems: 'center' }}>
            <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}>
              <Text style={{ color: '#000000', fontSize: 14 }}>Lo más destacado</Text>
            </CardItem>
            <Highlights
              itemName="Avengers - Infinity War"
              itemCreator="Unknown"
              itemPrice="$5.50"
              year="2018"
              imageUri={require('../resources/mv_1.jpg')}
              rating={5}
            />
            <Highlights
              itemName="Dark"
              itemCreator="Unknown"
              itemPrice="$10.00"
              year="2015"
              imageUri={require('../resources/mv_2.jpg')}
              rating={5}
            />
            <Highlights
              itemName="Rampage"
              itemCreator="Unknown"
              itemPrice="$5.50"
              year="2018"
              imageUri={require('../resources/mv_4.jpg')}
              rating={5}
            />
          </Card>
        </Content>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  headerForm: {
    backgroundColor: '#29313C', 
    height: 65, 
    justifyContent: 'space-between'
  },
  categories: {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    top: 66, 
    height: 65, 
    backgroundColor: '#29313C', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  categoriesForm: {
    backgroundColor: 'grey', 
    width: 120, height: 50, 
    borderRadius: 20, margin: 5, 
    alignItems: 'center'
  },
  searchForm: {
    flex: 1, 
    height: "100%", 
    marginLeft: 5, 
    margin: 10, 
    justifyContent: 'center', 
    borderRadius: 5 
  },
  userForm: {
    backgroundColor: '#FFFFFF', 
    height: 55, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  }
});