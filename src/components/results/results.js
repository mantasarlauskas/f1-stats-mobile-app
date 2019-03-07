import React, { Component } from 'react';
import {
  ScrollView, View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Loading from '../loading';
import styles from '../table/styles';

class Results extends Component {
  renderRow = ({
    Circuit: { circuitName }, round, raceName, date,
  }) => {
    const { history: { push } } = this.props;
    return (
      <TouchableOpacity
        key={round}
        onPress={() => push(`/results/${round}`)}
      >
        <View style={styles.tableRow}>
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
      </TouchableOpacity>
    );
  };

  render() {
    const { results, isLoading } = this.props;
    if (!isLoading) {
      return (
        <ScrollView>
          <Text style={styles.title}>
            Rezultatai
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
            {results.map(this.renderRow)}
          </View>
        </ScrollView>
      );
    }
    return <Loading />;
  }
}

const mapStateToProps = ({ api: { results, isLoading } }) => ({
  results,
  isLoading,
});

export default connect(mapStateToProps)(Results);
