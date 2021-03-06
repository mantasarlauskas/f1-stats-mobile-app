import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  favorite: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#000',
    marginBottom: 30,
    height: 50,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
  },
  favoriteActive: {
    backgroundColor: '#E40000',
  },
  favoriteText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
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
  driver: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverName: {
    marginLeft: 10,
    fontSize: 18,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  infoTitle: {
    flexBasis: '65%',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    flexBasis: '35%',
    fontSize: 18,
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
