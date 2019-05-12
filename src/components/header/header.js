import React from 'react';
import { withRouter } from 'react-router-native';
import { TouchableOpacity, View, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Images from '../../img/images';
import styles from './styles';

const Header = ({ history: { push, goBack }, location: { pathname } }) => (
  <View style={styles.header}>
    <View style={styles.container}>
      {pathname !== '/' ? (
        <FontAwesome
          style={styles.icon}
          name={'arrow-left'}
          size={35}
          color={'white'}
          onPress={() => goBack('/')}
        />
      ) : (
        <View style={styles.icon} />
      )}
      <TouchableOpacity style={styles.imageWrapper} onPress={() => push('/')}>
        <ImageBackground style={styles.image} source={Images.logo} />
      </TouchableOpacity>
    </View>
  </View>
);

export default withRouter(Header);
