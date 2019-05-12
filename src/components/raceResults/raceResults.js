import React, { Component } from 'react';
import { Dimensions, Text, ScrollView } from 'react-native';
import {
  TabView, TabBar, PagerScroll, SceneMap,
} from 'react-native-tab-view';
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
    routes: [
      { key: 'first', title: 'Lenktynės' },
      { key: 'second', title: 'Kvalifikacija' },
      { key: 'third', title: 'Sustojimai boksuose' },
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
      indicatorStyle={{ backgroundColor: '#E40000' }}
      labelStyle={{ fontSize: 12 }}
      {...props}
    />
  );

  renderInfo = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return <Text style={styles.title}>{`2019 m. ${id} etapo rezultatai`}</Text>;
  };

  renderRace = () => {
    const { race } = this.state;
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        {this.renderInfo()}
        <Race results={race} />
      </ScrollView>
    );
  };

  renderQualifying = () => {
    const { qualifying } = this.state;
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        {this.renderInfo()}
        <Qualifying results={qualifying} />
      </ScrollView>
    );
  };

  renderPitStops = () => {
    const { pitStops } = this.state;
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        {this.renderInfo()}
        <PitStops results={pitStops} />
      </ScrollView>
    );
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <TabView
        navigationState={this.state}
        style={styles.scene}
        renderScene={SceneMap({
          first: this.renderRace,
          second: this.renderQualifying,
          third: this.renderPitStops,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{
          width: Dimensions.get('window').width,
          height: 0,
        }}
        renderTabBar={this.renderTabBar}
        renderPager={props => <PagerScroll {...props} />}
      />
    );
  }
}

export default RaceResults;
