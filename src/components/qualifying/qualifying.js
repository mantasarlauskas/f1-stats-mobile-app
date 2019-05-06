import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../table/styles';

const Qualifying = ({ results }) => {
  const renderRow = ({
    Driver: { givenName, familyName, driverId },
    Constructor: { name },
    position,
    Q1,
    Q2,
    Q3,
  }) => (
    <View style={styles.tableRow} key={driverId}>
      <Text style={[styles.tableCell, { flexBasis: '7%' }]}>{position}</Text>
      <Text style={[styles.tableCell, { flexBasis: '25%' }]}>{`${givenName} ${familyName}`}</Text>
      <Text style={[styles.tableCell, { flexBasis: '25%' }]}>{name}</Text>
      <Text style={[styles.tableCell, { flexBasis: '15%', fontSize: 10 }]}>{Q1}</Text>
      <Text style={[styles.tableCell, { flexBasis: '14%', fontSize: 10 }]}>{Q2}</Text>
      <Text style={[styles.tableCell, { flexBasis: '14%', fontSize: 10 }]}>{Q3}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '7%' }]}>P.</Text>
          <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '25%' }]}>Pilotas</Text>
          <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '25%' }]}>Komanda</Text>
          <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '15%', fontSize: 10 }]}>
            Q1
          </Text>
          <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '14%', fontSize: 10 }]}>
            Q2
          </Text>
          <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '14%', fontSize: 10 }]}>
            Q3
          </Text>
        </View>
        {results.map(renderRow)}
      </View>
    </ScrollView>
  );
};

export default Qualifying;
