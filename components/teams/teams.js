import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Header from '../header';
import axios from "axios";

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    }
  }



  render() {
    return (
      <ScrollView>
        <Header />
        <Text>
          somebody
        </Text>
      </ScrollView>
    )
  }
}

export default Teams;