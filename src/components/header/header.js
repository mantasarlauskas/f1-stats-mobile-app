import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Animated } from 'react-native';
import styles from './styles';
import Image from 'react-native-remote-svg';
import { FontAwesome } from '@expo/vector-icons';
import Images from '../../img/images';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      animation: new Animated.Value(-250),
      menuItems: [
        {
          title: 'Pagrindinis',
          url: '/'
        },
        {
          title: 'Komandos',
          url: '/teams'
        },
        {
          title: 'Lenktynininkai',
          url: '/drivers'
        },
        {
          title: 'Taškų įskaitos',
          url: '/standings'
        },
        {
          title: 'Tvarkaraštis',
          url: '/schedule'
        }
      ]
    }
  }

  toggleMenu = () => {
    this.setState(({ menu }) => ({
      menu: !menu
    }));
  };

  toggleFade = () => {
    const { menu } = this.state;
    if (!menu) {
      this.toggleMenu();
      Animated.timing(
        this.state.animation,
        {
          toValue: 0,
          duration: 200,

        }
      ).start();
    } else {
      Animated.timing(
        this.state.animation,
        {
          toValue: -250,
          duration: 200,
        }
      ).start();
      setTimeout(this.toggleMenu, 200);
    }
  };

  displayMenu = () => {
    const { menuItems, animation } = this.state;
    const { navigate } = this.props;
    return (
      <Animated.View style={{ position: 'relative', top: animation }}>
        <View style={styles.menu}>
          {menuItems.map(({ title, url }) => (
            <TouchableOpacity
              key={title}
              onPress={() => navigate(url)}
            >
              <Text style={styles.menuItem}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    )
  };

  render() {
    const { menu } = this.state;
    const { navigate } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <FontAwesome
            style={styles.bars}
            name='bars'
            size={35}
            color='white'
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
    )
  }
}

export default Header;
