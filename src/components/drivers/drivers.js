import React, { Component } from 'react';
import {
  ScrollView, View, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import globalStyles from '../globalStyles';
import Loading from '../loading';

export default class extends Component {
  renderDriver = ({ familyName, givenName, driverId }) => {
    const {
      driverStandings,
      history: { push },
    } = this.props;
    const {
      Constructors: [{ constructorId }],
    } = driverStandings.find(({ Driver: { driverId: dId } }) => dId === driverId);
    return (
      <TouchableOpacity
        onPress={() => push(`/driver/${driverId}`)}
        style={[styles.driver, globalStyles[`${constructorId}Border`]]}
        key={driverId}
      >
        <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { drivers, isLoading } = this.props;
    return isLoading ? (
      <Loading />
    ) : (
      <ScrollView>
        <View style={styles.container}>{drivers.map(this.renderDriver)}</View>
      </ScrollView>
    );
  }
}
