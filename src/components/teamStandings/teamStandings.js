import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import globalStyles from '../globalStyles';
import styles from '../standings/styles';

const TeamStandings = ({ teamStandings }) => (
  <ScrollView>
    <View style={styles.container}>
      {teamStandings.map(({ position, points, Constructor: { name, constructorId } }) => (
        <View key={position} style={[styles.row, globalStyles[`${constructorId}Border`]]}>
          <View style={styles.firstColumn}>
            <Text style={styles.number}>{position}</Text>
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
  </ScrollView>
);

export default TeamStandings;
