import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    minHeight: 74,
    paddingTop: 24,
    backgroundColor: '#FFF',
  },
  container: {
    backgroundColor: '#000',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flexBasis: '20%',
    alignSelf: 'center',
    marginLeft: 10,
  },
  imageWrapper: {
    flexBasis: '30%',
    marginLeft: 50,
  },
  image: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});
