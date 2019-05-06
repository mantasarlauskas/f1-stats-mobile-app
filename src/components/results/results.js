import React from 'react';
import {
  ScrollView, View, Text, TouchableOpacity,
} from 'react-native';
import Loading from '../loading';
import styles from '../table/styles';

const Results = ({ history: { push }, races, isLoading }) => {
  const renderRow = ({
    Circuit: { circuitName }, round, raceName, date,
  }) => (
    <TouchableOpacity key={round} onPress={() => push(`/results/${round}`)}>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.tableCellSmall]}>{round}</Text>
        <Text style={[styles.tableCell, styles.tableCellBig]}>{raceName}</Text>
        <Text style={[styles.tableCell, styles.tableCellBig]}>{circuitName}</Text>
        <Text style={[styles.tableCell, styles.tableCellBig]}>{date}</Text>
      </View>
    </TouchableOpacity>
  );

  return isLoading ? (
    <Loading />
  ) : (
    <ScrollView>
      <Text style={styles.title}>Rezultatai</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellSmall]}>Nr.</Text>
          <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Lenktynės</Text>
          <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Trasa</Text>
          <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Data</Text>
        </View>
        {races.map(renderRow)}
      </View>
    </ScrollView>
  );
};

export default Results;
