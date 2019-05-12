import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  TabView, TabBar, SceneMap, PagerScroll,
} from 'react-native-tab-view';
import DriverStandings from '../driverStandings';
import TeamStandings from '../teamStandings';
import Loading from '../loading';
import styles from './styles';

class Standings extends Component {
  state = {
    index: 0,
    routes: [{ key: 'first', title: 'Lenktynininkai' }, { key: 'second', title: 'Komandos' }],
  };

  renderTabBar = props => (
    <TabBar style={styles.tabBar} indicatorStyle={{ backgroundColor: '#E40000' }} {...props} />
  );

  renderDrivers = () => <DriverStandings />;

  renderTeams = () => <TeamStandings />;

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <Loading />
    ) : (
      <TabView
        navigationState={this.state}
        style={styles.scene}
        renderScene={SceneMap({
          first: this.renderDrivers,
          second: this.renderTeams,
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

export default Standings;
