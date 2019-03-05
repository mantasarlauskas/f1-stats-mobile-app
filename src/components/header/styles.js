import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#E40000',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 99
  },
  bars: {
    flexBasis: '20%',
    alignSelf: 'center',
    marginLeft: 10
  },
  imageWrapper: {
    flexBasis: '80%',
    marginLeft: 80
  },
  image: {
    width: 60,
    height: 60
  },
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
    borderColor: '#d6d7da'
  }
});
