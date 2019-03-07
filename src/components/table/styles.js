import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  table: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%',
    backgroundColor: '#f7f4f1',
    marginBottom: 20,
    marginTop: 20,
  },
  tableRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
  },
  tableCellSmall: {
    flexBasis: '10%',
  },
  tableCellBig: {
    flexBasis: '30%',
  },
});
