import React, {Component} from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../header';
import globalStyles from '../globalStyles';
import Images from '../../img/images';

class Driver extends Component {
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
    const { history: { push }, driver, isLoading, team } = this.props;
    const { Constructors: [ { name, constructorId } ], points, position, wins } = team;
    const { givenName, familyName, permanentNumber, nationality, dateOfBirth } = driver;
    if (!isLoading) {
      return (
        <ScrollView>
          <Header navigate={push} />
          <View style={styles.container}>
            <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
            <View style={styles.content}>
              <Text style={styles.section}>Informacija</Text>
              {this.renderInfo('Komanda', name)}
              {this.renderInfo('Numeris', permanentNumber)}
              {this.renderInfo('Taškai', points)}
              {this.renderInfo('Čempionato pozicija', position)}
              {this.renderInfo('Pergalių skaičius', wins)}
              {this.renderInfo('Tautybė', nationality)}
              {this.renderInfo('Gimimo data', dateOfBirth)}
              <View style={[globalStyles[constructorId], styles.line]} />
              <View style={styles.image}>
                <Image source={Images.teams2018[constructorId]} />
              </View>
            </View>
          </View>
        </ScrollView>
      )
    }
    return <Text>waiting...</Text>
  }
}

const mapStateToProps = ({ api: { drivers, driverStandings, isLoading } }, { match: { params: { id } } }) => ({
  driver: drivers.find(({ driverId }) => driverId === id),
  team: driverStandings.find(({ Driver: { driverId } }) => driverId === id),
  isLoading
});

export default connect(mapStateToProps)(Driver);
