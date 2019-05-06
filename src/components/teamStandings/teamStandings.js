import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../globalStyles';
import styles from '../standings/styles';

const TeamStandings = ({ teamStandings }) => (
  <View style={styles.container}>
    {teamStandings.map(({ position, points, Constructor: { name, constructorId } }) => (
      <View key={position} style={styles.row}>
        <View style={styles.firstColumn}>
          <View style={styles.numberWrapper}>
            <Text style={styles.number}>{position}</Text>
            <Text style={[styles.numberColor, globalStyles[constructorId]]} />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.boldText}>{name}</Text>
        </View>
        <View style={styles.points}>
          <Text style={styles.text}>{points}</Text>
        </View>
      </View>
    ))}
  </View>
);

export default TeamStandings;
