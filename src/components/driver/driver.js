import React from 'react';
import {
  ScrollView, View, Text, Image,
} from 'react-native';
import styles from './styles';
import globalStyles from '../globalStyles';
import Images from '../../img/images';
import Info from '../info';

export default ({ driver, team }) => {
  const {
    Constructors: [{ name, constructorId }],
    points,
    position,
    wins,
  } = team;
  const {
    givenName, familyName, permanentNumber, nationality, dateOfBirth,
  } = driver;
  const data = [
    {
      title: 'Komanda',
      text: name,
    },
    {
      title: 'Numeris',
      text: permanentNumber,
    },
    {
      title: 'Taškai',
      text: points,
    },
    {
      title: 'Čempionato pozicija',
      text: position,
    },
    {
      title: 'Pergalių skaičius',
      text: wins,
    },
    {
      title: 'Tautybė',
      text: nationality,
    },
    {
      title: 'Gimimo data',
      text: dateOfBirth,
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
        <View style={styles.content}>
          <Text style={styles.section}>Informacija</Text>
          <Info data={data} />
          <View style={[globalStyles[constructorId], styles.line]} />
          <View style={styles.image}>
            <Image source={Images.teams2019[constructorId]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
