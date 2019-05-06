import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Info = ({ data }) => data.map(({ title, text }) => (
  <View key={title} style={styles.info}>
    <Text style={styles.infoTitle}>{title}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
));

export default Info;
