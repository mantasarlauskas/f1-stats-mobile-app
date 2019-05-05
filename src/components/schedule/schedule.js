import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Loading from '../loading';
import styles from '../table/styles';

export default class extends Component {
  renderRow = ({
    Circuit: { circuitName }, round, raceName, date,
  }) => (
    <View style={styles.tableRow} key={round}>
      <Text style={[styles.tableCell, styles.tableCellSmall]}>{round}</Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>{raceName}</Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>{circuitName}</Text>
      <Text style={[styles.tableCell, styles.tableCellBig]}>{date}</Text>
    </View>
  );

  render() {
    const { races, isLoading } = this.props;
    return isLoading ? (
      <Loading />
    ) : (
      <ScrollView>
        <Text style={styles.title}>Tvarkaraštis</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellSmall]}>Nr.</Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>
              Lenktynės
            </Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Trasa</Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>Data</Text>
          </View>
          {races.map(this.renderRow)}
        </View>
      </ScrollView>
    );
  }
}
