import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux'
import Header from '../header';
import styles from './styles';

class Schedule extends Component {
  renderRow = ({ Circuit: { circuitName }, round, raceName, date }) => {
    return (
      <View style={styles.tableRow} key={round}>
        <Text style={[styles.tableCell, styles.tableCellSmall]}>
          {round}
        </Text>
        <Text style={[styles.tableCell, styles.tableCellBig]}>
          {raceName}
        </Text>
        <Text style={[styles.tableCell, styles.tableCellBig]}>
          {circuitName}
        </Text>
        <Text style={[styles.tableCell, styles.tableCellBig]}>
          {date}
        </Text>
      </View>
    )
  };

  render() {
    const { history: { push }, schedule } = this.props;
    return (
      <ScrollView>
        <Header navigate={push} />
        <Text style={styles.title}>
          Tvarkaraštis
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellSmall]}>
              Nr.
            </Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>
              Lenktynės
            </Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>
              Trasa
            </Text>
            <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellBig]}>
              Data
            </Text>
          </View>
          {schedule.map(this.renderRow)}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ api: { schedule } }) => ({
  schedule
});

export default connect(mapStateToProps)(Schedule);

