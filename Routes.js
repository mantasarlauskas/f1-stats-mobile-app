import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { fetchData } from './src/thunks/api';
import Teams from './src/components/teams';
import Team from './src/components/team';
import Drivers from './src/components/drivers';
import Driver from './src/components/driver';
import Standings from './src/components/standings';
import Main from './src/components/main';
import Schedule from './src/components/schedule';

class Routes extends Component {
  constructor(props) {
    super(props);
    props.onLoad();
  }

  render() {
    return (
        <Switch>
          <Route exact path={'/'} component={Main} />
          <Route path={'/teams'} component={Teams} />
          <Route path={'/team/:id'} component={Team} />
          <Route path={'/drivers'} component={Drivers} />
          <Route path={'/driver/:id'} component={Driver} />
          <Route path={'/standings'} component={Standings} />
          <Route path={'/schedule'} component={Schedule} />
        </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchData())
});

export default withRouter(connect(null, mapDispatchToProps)(Routes));
