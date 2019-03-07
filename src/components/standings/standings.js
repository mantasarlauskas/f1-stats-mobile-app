import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { TabView, TabBar } from 'react-native-tab-view';
import DriverStandings from '../driverStandings';
import TeamStandings from '../teamStandings';
import Loading from '../loading';
import styles from './styles';

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'drivers', title: 'Lenktynininkai' },
        { key: 'teams', title: 'Komandos' },
      ],
    };
  }

  renderTabBar = props => (
    <TabBar
      style={styles.tabBar}
      indicatorStyle={{ backgroundColor: '#000' }}
      {...props}
    />
  );

  render() {
    const { index } = this.state;
    const { isLoading } = this.props;
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
          {index === 0 && <DriverStandings />}
          {index === 1 && <TeamStandings />}
        </ScrollView>
      );
    }
    return <Loading />;
  }
}

const mapStateToProps = ({ api: { isLoading } }) => ({
  isLoading,
});

export default connect(mapStateToProps)(Standings);
