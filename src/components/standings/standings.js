import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import DriverStandings from '../driverStandings';
import TeamStandings from '../teamStandings';
import Header from '../header';

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'drivers', title: 'Lenktynininkai' },
        { key: 'teams', title: 'Komandos' },
      ],
    }
  }

  renderTabBar = props => (
    <TabBar
      style={styles.tabBar}
      indicatorStyle={{ backgroundColor: '#000' }}
      {...props}
    />
  );

  render() {
    const { history: { push } } = this.props;
    const { index } = this.state;
    return (
      <ScrollView>
        <Header navigate={push} />
        <TabView
          navigationState={this.state}
          style={styles.scene}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: 0,
          }}
          renderScene={() => null}
          renderTabBar={this.renderTabBar}
        />
        {index === 0 && <DriverStandings />}
        {index === 1 && <TeamStandings />}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#E40000'
  }
});

export default Standings;
