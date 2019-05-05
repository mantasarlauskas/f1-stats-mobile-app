import React, { Component } from 'react';
import {
  TouchableOpacity, View, Text, Animated,
} from 'react-native';
import Image from 'react-native-remote-svg';
import { FontAwesome } from '@expo/vector-icons';
import Images from '../../img/images';
import styles from './styles';

export default class extends Component {
  state = {
    menu: false,
    animation: new Animated.Value(-250),
    menuItems: [
      {
        title: 'Pagrindinis',
        url: '/',
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
    ],
  };

  toggleMenu = () => {
    this.setState(({ menu }) => ({
      menu: !menu,
    }));
  };

  toggleFade = () => {
    const { menu, animation } = this.state;
    if (!menu) {
      this.toggleMenu();
      Animated.timing(
        animation,
        {
          toValue: 0,
          duration: 200,

        },
      ).start();
    } else {
      Animated.timing(
        animation,
        {
          toValue: -250,
          duration: 200,
        },
      ).start();
      setTimeout(this.toggleMenu, 200);
    }
  };

  handleRedirect = (url) => {
    const { navigate } = this.props;
    this.setState({
      menu: false,
      animation: new Animated.Value(-250),
    }, () => navigate(url));
  };

  displayMenu = () => {
    const { menuItems, animation } = this.state;
    return (
      <Animated.View style={{ left: animation }}>
        <View style={styles.menu}>
          {menuItems.map(({ title, url }) => (
            <TouchableOpacity
              key={title}
              onPress={() => this.handleRedirect(url)}
            >
              <Text style={styles.menuItem}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    );
  };

  render() {
    const { menu } = this.state;
    const { navigate } = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <FontAwesome
            style={styles.bars}
            name={'bars'}
            size={35}
            color={'white'}
            onPress={this.toggleFade}
          />
          <TouchableOpacity
            style={styles.imageWrapper}
            onPress={() => navigate('/')}
          >
            <Image
              source={Images.logo}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        {menu && this.displayMenu()}
      </View>
    );
  }
}
