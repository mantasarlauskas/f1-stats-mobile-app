import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import Image from 'react-native-remote-svg';
import { FontAwesome } from '@expo/vector-icons';
import Images from '../../img/images';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      menuItems: [
        'Home',
        'Teams',
        'Drivers'
      ]
    }
  }

  toggleMenu = () => {
    this.setState(({ menu }) => ({
      menu: !menu
    }));
  };

  displayMenu = () => {
    const { menuItems } = this.state;
    const { navigate } = this.props;
    return (
      <View style={styles.menu}>
        {menuItems.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => navigate(item)}
          >
            <Text style={styles.menuItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  };

  render() {
    const { menu } = this.state;
    return (
      <View>
        <View style={styles.container}>
          <FontAwesome
            style={styles.bars}
            name="bars"
            size={35}
            color="white"
            onPress={this.toggleMenu}
          />
          <Image
            source={Images.logo}
            style={styles.image}
          />
        </View>
        {menu && this.displayMenu()}
      </View>
    )
  }
}

export default Header;