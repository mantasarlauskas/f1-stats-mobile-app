import React, { Component } from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import Header from '../header';
import axios from "axios";
import styles from './styles';
import Images from '../../img/images';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    };

    this.fetchTeams();
  }

  fetchTeams = () => {
    axios
      .get('http://ergast.com/api/f1/2018/constructors.json')
      .then(res => this.setTeams(res.data.MRData.ConstructorTable.Constructors));
  };

  setTeams = teams => {
    this.setState({
      teams
    })
  };

  renderTeam = ({name, constructorId}) => {
    return (
      <TouchableOpacity style={styles.team} key={constructorId}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.container}>
          <Image source={Images.teams2018[constructorId]} />
        </View>
      </TouchableOpacity>
    )
  };

  render() {
    const { teams } = this.state;
    return (
      <ScrollView>
        <Header />
        <View style={styles.container}>
          {teams.map(this.renderTeam)}
        </View>
      </ScrollView>
    )
  }
}

export default Teams;