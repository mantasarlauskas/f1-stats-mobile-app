import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-native';
import { AppLoading, Asset } from 'expo';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { fetchData } from './src/thunks/api';
import Teams from './src/components/teams';
import Team from './src/components/team';
import Drivers from './src/components/drivers';
import Driver from './src/components/driver';
import Standings from './src/components/standings';
import Main from './src/components/main';
import Schedule from './src/components/schedule';
import Results from './src/components/results';
import RaceResults from './src/components/raceResults';
import Images from './src/img/images';
import Header from './src/components/header';
import Favorites from './src/components/favorites';

class Routes extends Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    const {
      fetchData: getData,
      history: { goBack },
    } = this.props;
    getData();
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      goBack();
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  cacheImages = images => images.map(image => Asset.fromModule(image).downloadAsync());

  loadAssetsAsync = async () => {
    const imageAssets = this.cacheImages([
      ...Object.keys(Images.teams2019).map(key => Images.teams2019[key]),
      ...Object.keys(Images)
        .filter(key => typeof Images[key] !== 'object')
        .map(key => Images[key]),
    ]);
    await Promise.all([...imageAssets]);
  };

  render() {
    const { isReady } = this.state;
    return !isReady ? (
      <AppLoading
        startAsync={this.loadAssetsAsync}
        onFinish={() => this.setState({ isReady: true })}
      />
    ) : (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Main} />
          <Route path={'/teams'} component={Teams} />
          <Route path={'/team/:id'} component={Team} />
          <Route path={'/drivers'} component={Drivers} />
          <Route path={'/driver/:id'} component={Driver} />
          <Route path={'/standings'} component={Standings} />
          <Route path={'/schedule'} component={Schedule} />
          <Route exact path={'/results'} component={Results} />
          <Route path={'/results/:id'} component={RaceResults} />
          <Route path={'/favorites'} component={Favorites} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchData },
  )(Routes),
);
