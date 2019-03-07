import React from 'react';
import {
  Text, ScrollView, View, Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../globalStyles';
import Images from '../../img/images';
import Info from '../info';

const Team = ({
  teamStandings: { points, position, wins },
  team: { constructorId, name, nationality },
  drivers,
}) => {
  const data = [
    {
      title: 'Pozicija čempionate',
      text: position,
    },
    {
      title: 'Taškai',
      text: points,
    },
    {
      title: 'Pergalės',
      text: wins,
    },
    {
      title: 'Tautybė',
      text: nationality,
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.content}>
          <Text style={styles.section}>Pilotai</Text>
          {drivers.map(({ Driver: { givenName, familyName, driverId } }) => (
            <View style={styles.driver} key={driverId}>
              <Ionicons name={'md-person'} size={32} />
              <Text style={styles.driverName}>{`${givenName} ${familyName}`}</Text>
            </View>
          ))}
          <View style={[globalStyles[constructorId], styles.line]} />
          <Text style={styles.section}>Informacija</Text>
          <Info data={data} />
          <View style={[globalStyles[constructorId], styles.line]} />
          <View style={styles.image}>
            <Image source={Images.teams2018[constructorId]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({
  api: { teams, driverStandings, teamStandings },
}, { match: { params: { id } } }) => ({
  team: teams.find(({ constructorId }) => constructorId === id),
  drivers: driverStandings.filter(({ Constructors }) => Constructors[0].constructorId === id),
  teamStandings: teamStandings.find(({ Constructor: { constructorId } }) => constructorId === id),
});

export default connect(mapStateToProps)(Team);
