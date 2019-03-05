import React, {Component} from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../header';
import globalStyles from '../globalStyles';

class Drivers extends Component {
  renderDriver = ({ familyName, givenName, driverId }) => {
    const { driverStandings, history: { push } } = this.props;
    const {
      Constructors: [ { constructorId } ]
    } = driverStandings.find(({ Driver: { driverId: dId } }) => dId === driverId);
    return (
      <TouchableOpacity
        onPress={() => push(`/driver/${driverId}`)}
        style={[styles.driver, globalStyles[`${constructorId}Border`]]}
        key={driverId}
      >
        <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
      </TouchableOpacity>
    )
  };

  render() {
    const { history: { push }, drivers, isLoading } = this.props;
    if (!isLoading) {
      return (
        <ScrollView>
          <Header navigate={push} />
          <View style={styles.container}>
            {drivers.map(this.renderDriver)}
          </View>
        </ScrollView>
      )
    }
    return <Text>waiting...</Text>
  }
}

const mapStateToProps = ({ api: { drivers, driverStandings, isLoading } }) => ({
  drivers,
  driverStandings,
  isLoading
});

export default connect(mapStateToProps)(Drivers);
