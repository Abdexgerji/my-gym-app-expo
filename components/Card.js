import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Card = ({ name, image }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.cardImage}
        // source={require('../assets/pictures/chest.jpg')}
        source={image}
      />
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 22,
    marginHorizontal: 22,
  },
  cardImage: {
    width: 40,
    aspectRatio: 1 / 1,
    // borderRadius: 50,
  },
});
