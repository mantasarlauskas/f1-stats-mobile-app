import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import DriverStandings from '../driverStandings';
import TeamStandings from '../teamStandings';
import Loading from '../loading';
import styles from './styles';

class Standings extends Component {
  state = {
    index: 0,
    // eslint-disable-next-line react/no-unused-state
    routes: [{ key: 'drivers', title: 'Lenktynininkai' }, { key: 'teams', title: 'Komandos' }],
  };

  renderTabBar = props => (
    <TabBar style={styles.tabBar} indicatorStyle={{ backgroundColor: '#000' }} {...props} />
  );

  render() {
    const { index } = this.state;
    const { isLoading } = this.props;
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
        {index === 0 && <DriverStandings />}
        {index === 1 && <TeamStandings />}
      </ScrollView>
    );
  }
}

export default Standings;
