import React from 'react';
import { ScrollView, View } from 'react-native';
import DriverRow from '../driverRow';
import Loading from '../loading';
import styles from './styles';

const Drivers = ({ drivers, isLoading }) => (isLoading ? (
  <Loading />
) : (
  <ScrollView>
    <View style={styles.container}>
      {drivers.map(driver => (
        <DriverRow key={driver.driverId} {...driver} />
      ))}
    </View>
  </ScrollView>
));

export default Drivers;
