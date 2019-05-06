import React, { Component } from 'react';
import { TouchableOpacity, View, Animated } from 'react-native';
import Image from 'react-native-remote-svg';
import { FontAwesome } from '@expo/vector-icons';
import Images from '../../img/images';
import Menu from '../menu';
import styles from './styles';

class Header extends Component {
  state = {
    menu: false,
    animation: new Animated.Value(-250),
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
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: -250,
        duration: 200,
      }).start();
      setTimeout(this.toggleMenu, 200);
    }
  };

  handleRedirect = (url) => {
    const { navigate } = this.props;
    this.setState(
      {
        menu: false,
        animation: new Animated.Value(-250),
      },
      () => navigate(url),
    );
  };

  render() {
    const { menu, animation } = this.state;
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
          <TouchableOpacity style={styles.imageWrapper} onPress={() => navigate('/')}>
            <Image source={Images.logo} style={styles.image} />
          </TouchableOpacity>
        </View>
        {menu && <Menu animation={animation} onRedirect={this.handleRedirect} />}
      </View>
    );
  }
}

export default Header;
