import React from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';
import styles from './styles';

const Card = ({ title, path, navigate }) => (
  <TouchableOpacity style={styles.container} onPress={navigate}>
    <ImageBackground style={styles.image} source={path}>
      <LinearGradient colors={['rgba(61, 52, 52, 0.8)', 'transparent']} style={styles.info}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </ImageBackground>
  </TouchableOpacity>
);

export default Card;
