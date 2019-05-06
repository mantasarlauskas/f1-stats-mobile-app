import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import FavoriteTeam from '../favoriteTeam';
import FavoriteDriver from '../favoriteDriver';
import Loading from '../loading';
import styles from './styles';

const Favorites = ({ isLoading, favoriteTeams, favoriteDrivers }) => (isLoading ? (
  <Loading />
) : (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Mėgstamiausi lenktyninkai</Text>
      {favoriteDrivers.length > 0 ? (
        favoriteDrivers.map(driver => <FavoriteDriver key={driver.name} {...driver} />)
      ) : (
        <Text style={styles.empty}>Sąrašas tuščias</Text>
      )}
      <Text style={styles.sectionTitle}>Mėgstamiausios komandos</Text>
      {favoriteTeams.length > 0 ? (
        favoriteTeams.map(team => <FavoriteTeam key={team.name} {...team} />)
      ) : (
        <Text style={styles.empty}>Sąrašas tuščias</Text>
      )}
    </View>
  </ScrollView>
));

export default Favorites;
