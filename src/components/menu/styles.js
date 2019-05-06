import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  menu: {
    backgroundColor: '#E40000',
  },
  menuItem: {
    color: '#FFF',
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: Dimensions.get('window').width,
  },
});
