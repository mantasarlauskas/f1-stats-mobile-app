import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/header';
import Card from './components/card';
import Images from './img/images';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Teams from './components/teams';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: []
    };

    this.fetchSeasons();
  }

  fetchSeasons = () => {
    axios
      .get('http://ergast.com/api/f1/seasons.json?limit=1000')
      .then(res => this.setSeasons(res.data.MRData.SeasonTable.Seasons));
  };

  setSeasons = seasons => {
    this.setState({
      seasons
    });
  };

  render() {
    const { seasons } = this.state;
    return (
      <ScrollView>
        <Header/>
        <Card
          navigate={() => this.props.navigation.navigate('Teams')}
          path={Images.teams}
          title={'Komandos'}
        />
        <Card path={Images.vettel} title={'Lenktynininkai'}/>
        <Card path={Images.finish} title={'Sezonai'}/>
        <View style={styles.container}>
          {seasons.map(({ season }) => (
            <Text key={season}>{season}</Text>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Teams: Teams
  },
  {
    initialRouteName: "Teams",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);
