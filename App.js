import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './components/header';
import Card from './components/card';
import Images from './img/images';
import Teams from './components/teams';
import Drivers from './components/drivers';
import Standings from './components/standings';

class App extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Header navigation={navigation} />
        <Card
          navigate={() => navigation.navigate('Teams')}
          path={Images.teams}
          title={'Komandos'}
        />
        <Card
          navigate={() => navigation.navigate('Drivers')}
          path={Images.vettel}
          title={'Lenktynininkai'}
        />
        <Card
          navigate={() => navigation.navigate('Standings')}
          path={Images.finish}
          title={'Taškų įskaitos'}
        />
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Teams: Teams,
    Drivers: Drivers,
    Standings: Standings
  },
  {
    initialRouteName: "Standings",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);
