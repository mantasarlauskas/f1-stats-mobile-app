import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../globalStyles';
import styles from '../standings/styles';

const DriverStandings = ({ driverStandings }) => (
  <View style={styles.container}>
    {driverStandings.map(
      ({
        position, points, Constructors, Driver: { givenName, familyName },
      }) => (
        <View key={position} style={styles.row}>
          <View style={styles.firstColumn}>
            <View style={styles.numberWrapper}>
              <Text style={styles.number}>{position}</Text>
              <Text style={[styles.numberColor, globalStyles[Constructors[0].constructorId]]} />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>
              {givenName}
              &nbsp;
              <Text style={styles.boldText}>{familyName}</Text>
            </Text>
          </View>
          <View style={styles.points}>
            <Text style={styles.boldText}>{points}</Text>
          </View>
        </View>
      ),
    )}
  </View>
);

export default DriverStandings;
