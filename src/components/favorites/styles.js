import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f7f4f1',
    minHeight: Dimensions.get('window').height - 74,
  },
  item: {
    width: '90%',
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: '#000',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
