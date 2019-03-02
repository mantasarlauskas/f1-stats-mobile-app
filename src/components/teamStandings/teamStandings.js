import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import globalStyles from '../globalStyles';
import styles from '../standings/styles';

class TeamStandings extends Component {
  render() {
    const { teamStandings } = this.props;
    return (
      <View style={styles.container}>
        {teamStandings.map(({ position, points, Constructor: { name, constructorId }}) => {
          return (
            <View key={position} style={styles.row}>
              <View style={styles.firstColumn}>
                <View style={styles.numberWrapper}>
                  <Text style={styles.number}>
                    {position}
                  </Text>
                  <Text style={[styles.numberColor, globalStyles[constructorId]]} />
                </View>
              </View>
              <View style={styles.title}>
                <Text style={styles.boldText}>
                  {name}
                </Text>
              </View>
              <View style={styles.points}>
                <Text style={styles.text}>
                  {points}
                </Text>
              </View>
            </View>
          )})}
      </View>
    );
  }
}

const mapStateToProps = ({ api: { isLoading, teamStandings } }) => ({
  teamStandings,
  isLoading
});

export default connect(mapStateToProps)(TeamStandings);
