import React from 'react';
import { withRouter } from 'react-router-native';
import { Text, TouchableOpacity } from 'react-native';
import globalStyles from '../globalStyles';
import styles from '../favorites/styles';

const FavoriteTeam = ({
  teamPosition: {
    Constructor: { constructorId, name },
  },
  history: { push },
}) => (
  <TouchableOpacity
    style={[styles.item, globalStyles[`${constructorId}Border`]]}
    onPress={() => push(`/team/${constructorId}`)}
  >
    <Text style={styles.title}>{name}</Text>
  </TouchableOpacity>
);

export default withRouter(FavoriteTeam);
