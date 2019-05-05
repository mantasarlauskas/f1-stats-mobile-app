import React, { Component } from 'react';
import {
  Text, ScrollView, View, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Loading from '../loading';
import globalStyles from '../globalStyles';

export default class extends Component {
  renderTeam = ({ name, constructorId }) => {
    const {
      history: { push },
    } = this.props;
    return (
      <TouchableOpacity
        key={constructorId}
        style={[styles.team, globalStyles[`${constructorId}Border`]]}
        onPress={() => push(`/team/${constructorId}`)}
      >
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { teams, isLoading } = this.props;
    return isLoading ? (
      <Loading />
    ) : (
      <ScrollView>
        <View style={styles.container}>{teams.map(this.renderTeam)}</View>
      </ScrollView>
    );
  }
}
