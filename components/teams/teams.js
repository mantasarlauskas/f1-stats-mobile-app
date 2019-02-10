import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Header from '../header';
import axios from "axios";

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

  render() {
    const { teams } = this.state;
    return (
      <ScrollView>
        <Header />
        <Text>
          {teams.map(({name, constructorId}) => <Text key={constructorId}>{name}</Text>)}
        </Text>
      </ScrollView>
    )
  }
}

export default Teams;