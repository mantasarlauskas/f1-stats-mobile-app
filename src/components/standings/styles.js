import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#000',
  },
  container: {
    backgroundColor: '#f7f4f1',
  },
  row: {
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderBottomRightRadius: 5,
  },
  firstColumn: {
    flexBasis: '25%',
  },
  number: {
    color: '#000',
    fontWeight: 'bold',
    lineHeight: 18,
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    flexBasis: '50%',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  boldText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  points: {
    flexBasis: '25%',
  },
});
