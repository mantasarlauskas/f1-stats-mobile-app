import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f4f1',
  },
  driver: {
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
});
