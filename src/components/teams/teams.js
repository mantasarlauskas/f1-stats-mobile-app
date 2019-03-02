import React, { Component } from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Images from '../../img/images';
import Header from '../header';

class Teams extends Component {
  renderTeam = ({ name, constructorId }) => {
    return (
      <TouchableOpacity style={[styles.team, styles[constructorId]]} key={constructorId}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.container}>
          <Image source={Images.teams2018[constructorId]} />
        </View>
      </TouchableOpacity>
    )
  };

  render() {
    const { history: { push }, teams, isLoading } = this.props;
    if (!isLoading) {
      return (
        <ScrollView>
          <Header navigate={push} />
          <View style={styles.container}>
            {teams.map(this.renderTeam)}
          </View>
        </ScrollView>
      )
    }
    return <Text>Waiting...</Text>
  }
}

const mapStateToProps = ({ api: { teams, isLoading } }) => ({
  teams,
  isLoading
});

export default connect(mapStateToProps)(Teams);
