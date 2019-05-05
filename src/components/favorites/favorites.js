import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Loading from '../loading';
import globalStyles from '../globalStyles';
import styles from './styles';

export default class extends Component {
  renderDriver = ({ name: driverId }) => {
    const {
      driverStandings,
      history: { push },
    } = this.props;
    const {
      Constructors: [{ constructorId }],
      Driver: { givenName, familyName },
    } = driverStandings.find(({ Driver: { driverId: dId } }) => dId === driverId);
    return (
      <TouchableOpacity
        onPress={() => push(`/driver/${driverId}`)}
        style={[styles.item, globalStyles[`${constructorId}Border`]]}
        key={driverId}
      >
        <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
      </TouchableOpacity>
    );
  };

  renderTeam = ({ name: teamId }) => {
    const {
      teamStandings,
      history: { push },
    } = this.props;
    const {
      Constructor: { constructorId, name },
    } = teamStandings.find(({ Constructor: { constructorId: id } }) => id === teamId);
    return (
      <TouchableOpacity
        key={constructorId}
        style={[styles.item, globalStyles[`${constructorId}Border`]]}
        onPress={() => push(`/team/${constructorId}`)}
      >
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { isLoading, favoriteTeams, favoriteDrivers } = this.props;
    return isLoading ? (
      <Loading />
    ) : (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Mėgstamiausi lenktyninkai</Text>
        {favoriteDrivers.length > 0 ? (
          favoriteDrivers.map(this.renderDriver)
        ) : (
          <Text style={styles.empty}>Sąrašas tuščias</Text>
        )}
        <Text style={styles.sectionTitle}>Mėgstamiausios komandos</Text>
        {favoriteTeams.length > 0 ? (
          favoriteTeams.map(this.renderTeam)
        ) : (
          <Text style={styles.empty}>Sąrašas tuščias</Text>
        )}
      </View>
    );
  }
}
