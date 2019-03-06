import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default () => (
  <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'#E40000'} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
