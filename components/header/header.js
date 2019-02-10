import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
        'Pagrindinis',
        'Sezonai',
        'Komandos',
        'Lenktynininkai'
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
    return (
      <View style={styles.menu}>
        {menuItems.map(item => <Text key={item} style={styles.menuItem}>{item}</Text>)}
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