import React from 'react';
import {
  ScrollView, View, Text, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import globalStyles from '../globalStyles';
import Images from '../../img/images';
import Info from '../info';

const Driver = ({
  driver: {
    givenName, familyName, permanentNumber, nationality, dateOfBirth,
  },
  team: {
    Constructors: [{ name, constructorId }],
    points,
    position,
    wins,
  },
  isFavorite,
  setFavoriteDriver,
  removeFavoriteDriver,
  id,
}) => {
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

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavoriteDriver(id);
    } else {
      setFavoriteDriver(id);
    }
  };

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
        <TouchableOpacity
          style={isFavorite ? [styles.favorite, styles.favoriteActive] : styles.favorite}
          onPress={handleFavoriteClick}
        >
          <Text style={styles.favoriteText}>
            {isFavorite ? 'Šalinti iš mėgstamiausių' : 'Pridėti į mėgstamiausius'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Driver;
