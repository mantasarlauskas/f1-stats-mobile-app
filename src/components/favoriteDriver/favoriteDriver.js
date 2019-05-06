import React from 'react';
import { withRouter } from 'react-router-native';
import { Text, TouchableOpacity } from 'react-native';
import globalStyles from '../globalStyles';
import styles from '../favorites/styles';

const FavoriteDriver = ({
  driverPosition: {
    Constructors: [{ constructorId }],
    Driver: { givenName, familyName, driverId },
  },
  history: { push },
}) => (
  <TouchableOpacity
    onPress={() => push(`/driver/${driverId}`)}
    style={[styles.item, globalStyles[`${constructorId}Border`]]}
  >
    <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
  </TouchableOpacity>
);

export default withRouter(FavoriteDriver);
