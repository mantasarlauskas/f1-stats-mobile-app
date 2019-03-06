import React, { Component } from 'react';
import {ScrollView, StyleSheet, Dimensions, Text} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import axios from 'axios';
import Header from '../header';
import Race from '../race';
import Qualifying from '../qualifying';
import PitStops from '../pitStops';
import Loading from '../loading';
import styles from './styles';

class RaceResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'race', title: 'Lenktynės' },
        { key: 'qualifying', title: 'Kvalifikacija' },
        { key: 'pitStops', title: 'Sustojimai boksuose'}
      ],
      race: [],
      qualifying: [],
      pitStops: [],
      isLoading: true
    };
    this.fetchData();
  }

  fetchData = async () => {
    const { match: { params: { id } } } = this.props;
    const {
      data: {
        MRData: { RaceTable: { Races: RaceStats } }
      }
    } = await axios(`https://ergast.com/api/f1/2018/${id}/results.json`);
    const {
      data: {
        MRData: { RaceTable: { Races: QualifyingStats } }
      }
    } = await axios(`https://ergast.com/api/f1/2018/${id}/qualifying.json`);
    const {
      data: {
        MRData: { RaceTable: { Races: PitStopStats } }
      }
    } = await axios(`https://ergast.com/api/f1/2018/${id}/pitstops.json`);
    this.setState({
      race: RaceStats[0].Results,
      qualifying: QualifyingStats[0].QualifyingResults,
      pitStops: PitStopStats[0].PitStops,
      isLoading: false
    });
  };

  renderTabBar = props => (
    <TabBar
      style={styles.tabBar}
      indicatorStyle={{ backgroundColor: '#000' }}
      labelStyle={{ fontSize: 12 }}
      {...props}
    />
  );

  render() {
    const { match: { params: { id } } } = this.props;
    const { index, race, isLoading, qualifying, pitStops } = this.state;
    if (!isLoading) {
      return (
        <ScrollView>
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
          <Text style={styles.title}>2018 m. {id} etapo rezultatai</Text>
          {index === 0 && <Race results={race} />}
          {index === 1 && <Qualifying results={qualifying} />}
          {index === 2 && <PitStops results={pitStops} />}
        </ScrollView>
      );
    }
    return <Loading />;
  }
}

export default RaceResults;
