import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    minHeight: 74,
    paddingTop: 24,
    backgroundColor: '#FFF',
    position: 'absolute',
    zIndex: 99,
  },
  container: {
    backgroundColor: '#E40000',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 99,
  },
  bars: {
    flexBasis: '20%',
    alignSelf: 'center',
    marginLeft: 10,
  },
  imageWrapper: {
    flexBasis: '80%',
    marginLeft: 80,
  },
  image: {
    width: 60,
    height: 60,
  },
});
