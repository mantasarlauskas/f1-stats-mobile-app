import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f7f4f1'
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
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderBottomRightRadius: 5
  },
  firstColumn: {
    flexBasis: '25%'
  },
  numberWrapper: {
    backgroundColor: 'rgb(176, 176, 176)',
    width: 40,
    height: 28,
    lineHeight: 14,
    paddingTop: 7,
    paddingRight: 10,
    paddingBottom: 7,
    transform: [{ skewX: '-30deg' }],
    marginLeft: 15,
  },
  number: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    transform: [{ skewX: '30deg' }]
  },
  numberColor: {
    position: 'absolute',
    width: 10,
    right: 0,
    top: 0,
    height: 28
  },
  title: {
    flexBasis: '50%',
  },
  text: {
    textAlign: 'center',
    fontSize: 18
  },
  boldText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  points: {
    flexBasis: '25%'
  }
});