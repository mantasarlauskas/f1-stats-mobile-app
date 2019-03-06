import React, {Component} from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../globalStyles';
import Loading from '../loading';

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
    const { drivers, isLoading } = this.props;
    if (!isLoading) {
      return (
        <ScrollView>
          <View style={styles.container}>
            {drivers.map(this.renderDriver)}
          </View>
        </ScrollView>
      )
    }
    return <Loading />;
  }
}

const mapStateToProps = ({ api: { drivers, driverStandings, isLoading } }) => ({
  drivers,
  driverStandings,
  isLoading
});

export default connect(mapStateToProps)(Drivers);
