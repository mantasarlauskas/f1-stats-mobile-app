import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  container: {
    backgroundColor: '#FFF',
  },
  content: {
    backgroundColor: '#f7f4f1',
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    width: '90%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  section: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
