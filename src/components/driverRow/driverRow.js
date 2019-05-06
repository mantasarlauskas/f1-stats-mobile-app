import React from 'react';
import { withRouter } from 'react-router-native';
import { Text, TouchableOpacity } from 'react-native';
import globalStyles from '../globalStyles';
import styles from './styles';

const DriverRow = ({
  familyName,
  givenName,
  driverId,
  driverPosition: {
    Constructors: [{ constructorId }],
  },
  history: { push },
}) => (
  <TouchableOpacity
    onPress={() => push(`/driver/${driverId}`)}
    style={[styles.driver, globalStyles[`${constructorId}Border`]]}
  >
    <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
  </TouchableOpacity>
);

export default withRouter(DriverRow);
