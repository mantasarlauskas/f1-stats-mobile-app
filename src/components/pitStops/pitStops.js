import React from 'react';
import { View, Text } from 'react-native';
import styles from '../table/styles';

const PitStops = ({ driverStandings, drivers, results }) => {
  const renderRow = ({ driverId, lap, duration }, index) => {
    const {
      Constructors: [{ name }],
    } = driverStandings.find(({ Driver: { driverId: dId } }) => dId === driverId);
    const { givenName, familyName } = drivers.find(({ driverId: dId }) => dId === driverId);
    return (
      <View style={styles.tableRow} key={index}>
        <Text style={[styles.tableCell, styles.tableCellBig]}>{`${givenName} ${familyName}`}</Text>
        <Text style={[styles.tableCell, styles.tableCellBig]}>{name}</Text>
        <Text style={[styles.tableCell, { flexBasis: '20%' }]}>{lap}</Text>
        <Text style={[styles.tableCell, { flexBasis: '20%' }]}>{duration}</Text>
      </View>
    );
  };

  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Pilotas</Text>
        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Komanda</Text>
        <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '20%' }]}>Ratas</Text>
        <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '20%' }]}>Trukmė</Text>
      </View>
      {results.map(renderRow)}
    </View>
  );
};

export default PitStops;
