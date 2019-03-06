import React, { Component } from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../header';
import globalStyles from '../globalStyles';
import Images from "../../img/images";
import Loading from '../loading';

class Team extends Component {
  renderInfo = (title, text) => {
    return (
      <View style={styles.info}>
        <Text style={styles.infoTitle}>
          {title}
        </Text>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    )
  };

  render() {
    const {
      teamStandings: { points, position, wins },
      team: { constructorId, name, nationality },
      drivers,
      isLoading
    } = this.props;
    if (!isLoading) {
      return (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.content}>
              <Text style={styles.section}>Pilotai</Text>
              {drivers.map(({ Driver: { givenName, familyName, driverId } }) => (
                <View style={styles.driver} key={driverId}>
                  <Ionicons name="md-person" size={32} />
                  <Text style={styles.driverName}>{`${givenName} ${familyName}`}</Text>
                </View>
              ))}
              <View style={[globalStyles[constructorId], styles.line]} />
              <Text style={styles.section}>Informacija</Text>
              {this.renderInfo('Pozicija čempionate', position)}
              {this.renderInfo('Taškai', points)}
              {this.renderInfo('Pergalės', wins)}
              {this.renderInfo('Tautybė', nationality)}
              <View style={[globalStyles[constructorId], styles.line]} />
              <View style={styles.image}>
                <Image source={Images.teams2018[constructorId]} />
              </View>
            </View>
          </View>
        </ScrollView>
      )
    }
    return <Loading />;
  }
}

const mapStateToProps = ({
  api: { teams, driverStandings, teamStandings, isLoading }
}, { match: { params: { id } } }) => ({
  team: teams.find(({ constructorId }) => constructorId === id),
  drivers: driverStandings.filter(({ Constructors }) => Constructors[0].constructorId === id),
  teamStandings: teamStandings.find(({ Constructor: { constructorId } }) =>  constructorId === id),
  isLoading
});

export default connect(mapStateToProps)(Team);
