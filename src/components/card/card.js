import React, { Component } from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo';

class Card extends Component {
  render() {
    const { title, path, navigate } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={navigate}>
        <ImageBackground
          style={styles.image}
          source={path}
        >
          <LinearGradient
            colors={['rgba(61, 52, 52, 0.8)', 'transparent']}
            style={styles.info}
          >
            <Text style={styles.title}>{title}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}

export default Card;
