import React from 'react';
import {
  Text, ScrollView, View, Image, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import globalStyles from '../globalStyles';
import Images from '../../img/images';
import Info from '../info';

export default ({
  teamStandings: { points, position, wins },
  team: { constructorId, name, nationality },
  drivers,
  isFavorite,
  setFavoriteTeam,
  removeFavoriteTeam,
  id,
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

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavoriteTeam(id);
    } else {
      setFavoriteTeam(id);
    }
  };

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
