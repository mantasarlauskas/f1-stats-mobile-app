import React, {Component} from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Images from '../../img/images';
import Header from '../header';

class Drivers extends Component {
  renderDriver = ({ familyName, givenName, driverId }) => {
    return (
      <TouchableOpacity style={styles.driver} key={driverId}>
        <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
        <View style={styles.container}>
          <Image style={styles.image} source={Images.drivers2018[driverId]} />
        </View>
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

const mapStateToProps = ({ api: { drivers, isLoading } }) => ({
  drivers,
  isLoading
});

export default connect(mapStateToProps)(Drivers);
