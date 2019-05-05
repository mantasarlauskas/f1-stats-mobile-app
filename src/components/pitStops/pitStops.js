import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../table/styles';

export default class extends Component {
  renderRow = ({ driverId, lap, duration }, index) => {
    const { driverStandings, drivers } = this.props;
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

  render() {
    const { results } = this.props;
    return (
      <ScrollView>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Pilotas</Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Komanda</Text>
            <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '20%' }]}>Ratas</Text>
            <Text style={[styles.tableCell, styles.tableHeader, { flexBasis: '20%' }]}>Trukmė</Text>
          </View>
          {results.map(this.renderRow)}
        </View>
      </ScrollView>
    );
  }
}
