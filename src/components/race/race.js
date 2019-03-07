import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../table/styles';

class Race extends Component {
  renderRow = ({
    Driver: { givenName, familyName, driverId },
    Constructor: { name },
    position,
    Time,
    status,
  }) => (
    <View style={styles.tableRow} key={driverId}>
      <Text style={[styles.tableCell, styles.tableCellSmall]}>
        {position}
      </Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>
        {`${givenName} ${familyName}`}
      </Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>
        {name}
      </Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>
        {Time ? Time.time : status}
      </Text>
    </View>
  );

  render() {
    const { results } = this.props;
    return (
      <ScrollView>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellSmall]}>
              Pos.
            </Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>
              Pilotas
            </Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>
              Komanda
            </Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>
              Laikas
            </Text>
          </View>
          {results.map(this.renderRow)}
        </View>
      </ScrollView>
    );
  }
}

export default Race;
