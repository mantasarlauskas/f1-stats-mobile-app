import React, {Component} from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../header';
import axios from "axios";
import styles from "./styles";
import Images from "../../img/images";


class Drivers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drivers: []
    };

    this.fetchDrivers();
  }

  fetchDrivers = () => {
    axios
      .get('http://ergast.com/api/f1/2018/drivers.json')
      .then(res => this.setDrivers(res.data.MRData.DriverTable.Drivers));
  };

  setDrivers = drivers => {
    this.setState({
      drivers
    })
  };

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
    const { drivers } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Header navigation={navigation} />
        <View style={styles.container}>
          {drivers.map(this.renderDriver)}
        </View>
      </ScrollView>
    )
  }
}

export default Drivers;