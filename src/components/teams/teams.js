import React from 'react';
import {
  Text, ScrollView, View, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Loading from '../loading';
import globalStyles from '../globalStyles';

const Teams = ({ history: { push }, teams, isLoading }) => {
  const renderTeam = ({ name, constructorId }) => (
    <TouchableOpacity
      key={constructorId}
      style={[styles.team, globalStyles[`${constructorId}Border`]]}
      onPress={() => push(`/team/${constructorId}`)}
    >
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );

  return isLoading ? (
    <Loading />
  ) : (
    <ScrollView>
      <View style={styles.container}>{teams.map(renderTeam)}</View>
    </ScrollView>
  );
};

export default Teams;
