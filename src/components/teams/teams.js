import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../header';
import globalStyles from '../globalStyles';

class Teams extends Component {
  renderTeam = ({ name, constructorId }) => {
    const { history: { push }} = this.props;
    return (
      <TouchableOpacity
        key={constructorId}
        style={[styles.team, globalStyles[`${constructorId}Border`]]}
        onPress={() => push(`/team/${constructorId}`)}
      >
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
    );
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
