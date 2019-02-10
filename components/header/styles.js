import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#E40000',
    height: 50,
    flex: 1,
    flexDirection: 'row',
  },
  bars: {
    flexBasis: '20%',
    alignSelf: 'center',
    marginLeft: 10
  },
  image: {
    width: 50,
    height: 50,
    flexBasis: '80%',
    marginLeft: 40
  },
  menu: {
    backgroundColor: '#000',
  },
  menuItem: {
    color: '#FFF',
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    paddingTop: 10,
    paddingBottom: 10
  }
});