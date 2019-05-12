import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Loading from '../loading';
import styles from '../table/styles';

const Schedule = ({ races, isLoading }) => {
  const getRemainingDayCount = () => Math.ceil(
    Math.abs(new Date(races[0].date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  );

  const renderRow = ({
    Circuit: { circuitName }, round, raceName, date,
  }) => (
    <View style={styles.tableRow} key={round}>
      <Text style={[styles.tableCell, styles.tableCellSmall]}>{round}</Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>{raceName}</Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>{circuitName}</Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>{date}</Text>
    </View>
  );

  return isLoading ? (
    <Loading />
  ) : (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Text style={styles.title}>Tvarkaraštis</Text>
      <View style={styles.clock}>
        <Feather name={'clock'} size={34} />
        <Text style={styles.dayCount}>
          {`Iki kitų lenktynių liko: ${getRemainingDayCount()} dienos(-ų)`}
        </Text>
      </View>
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

export default Schedule;
