import React, { Component } from 'react';
import { ScrollView, Dimensions, Text } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import axios from 'axios';
import Race from '../race';
import Qualifying from '../qualifying';
import PitStops from '../pitStops';
import Loading from '../loading';
import styles from './styles';
import { url } from '../../thunks/api';

class RaceResults extends Component {
  state = {
    index: 0,
    // eslint-disable-next-line react/no-unused-state
    routes: [
      { key: 'race', title: 'Lenktynės' },
      { key: 'qualifying', title: 'Kvalifikacija' },
      { key: 'pitStops', title: 'Sustojimai boksuose' },
    ],
    race: [],
    qualifying: [],
    pitStops: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const {
      data: {
        MRData: {
          RaceTable: { Races: RaceStats },
        },
      },
    } = await axios(`${url}/${id}/results.json`);
    const {
      data: {
        MRData: {
          RaceTable: { Races: QualifyingStats },
        },
      },
    } = await axios(`${url}/${id}/qualifying.json`);
    const {
      data: {
        MRData: {
          RaceTable: { Races: PitStopStats },
        },
      },
    } = await axios(`${url}/${id}/pitstops.json`);
    this.setState({
      race: RaceStats[0].Results,
      qualifying: QualifyingStats[0].QualifyingResults,
      pitStops: PitStopStats[0].PitStops,
      isLoading: false,
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
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const {
      index, race, isLoading, qualifying, pitStops,
    } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <ScrollView>
        <TabView
          navigationState={this.state}
          style={styles.scene}
          onIndexChange={newIndex => this.setState({ index: newIndex })}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: 0,
          }}
          renderScene={() => null}
          renderTabBar={this.renderTabBar}
        />
        <Text style={styles.title}>{`2019 m. ${id} etapo rezultatai`}</Text>
        {index === 0 && <Race results={race} />}
        {index === 1 && <Qualifying results={qualifying} />}
        {index === 2 && <PitStops results={pitStops} />}
      </ScrollView>
    );
  }
}

export default RaceResults;
