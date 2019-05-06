import React from 'react';
import {
  Text, TouchableOpacity, View, Animated,
} from 'react-native';
import styles from './styles';

const menuItems = [
  {
    title: 'Pagrindinis',
    url: '/',
  },
  {
    title: 'Mėgstamiausi',
    url: '/favorites',
  },
  {
    title: 'Komandos',
    url: '/teams',
  },
  {
    title: 'Lenktynininkai',
    url: '/drivers',
  },
  {
    title: 'Taškų įskaitos',
    url: '/standings',
  },
  {
    title: 'Rezultatai',
    url: '/results',
  },
  {
    title: 'Tvarkaraštis',
    url: '/schedule',
  },
];

const Menu = ({ animation, onRedirect }) => (
  <Animated.View style={{ left: animation }}>
    <View style={styles.menu}>
      {menuItems.map(({ title, url }) => (
        <TouchableOpacity key={title} onPress={() => onRedirect(url)}>
          <Text style={styles.menuItem}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </Animated.View>
);

export default Menu;
