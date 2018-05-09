import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import { Card, CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating';

export default class Highlights extends Component {
  render() {
    return(
      <CardItem>
        <Image style={{ height: 150, width: 100 }}
          source={ this.props.imageUri } 
        />
        <Right style={{ flex: 1, alignItems: 'flex-start', height: 150, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}><Text>Título: </Text>{this.props.itemName}</Text>
          <Text><Text>Productor: </Text>{this.props.itemCreator}</Text>
          <Text><Text>Precio: </Text>{this.props.itemPrice}</Text>
          <Text><Text>Año: </Text>{this.props.year}</Text>

        <StarRating
          disable={true}
          maxStars={5}
          rating={this.props.rating}
          starSize={15}
          fullStarColor={'#F1B500'}
          emptyStarColor={'#F1B500'}
        />
        </Right>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});