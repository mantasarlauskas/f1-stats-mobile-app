import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import globalStyles from '../globalStyles';
import styles from '../standings/styles';

const DriverStandings = ({ driverStandings }) => (
  <ScrollView>
    <View style={styles.container}>
      {driverStandings.map(
        ({
          position, points, Constructors, Driver: { givenName, familyName },
        }) => (
          <View
            key={position}
            style={[styles.row, globalStyles[`${Constructors[0].constructorId}Border`]]}
          >
            <View style={styles.firstColumn}>
              <Text style={styles.number}>{position}</Text>
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
  </ScrollView>
);

export default DriverStandings;
