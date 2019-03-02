import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { fetchData } from './src/thunks/api';
import Teams from './src/components/teams';
import Drivers from './src/components/drivers';
import Standings from './src/components/standings';
import Main from './src/components/main';

class Routes extends Component {
  constructor(props) {
    super(props);
    props.onLoad();
  }

  render() {
    return (
        <Switch>
          <Route exact path={'/'} component={Main} />
          <Route exact path={'/teams'} component={Teams} />
          <Route exact path={'/drivers'} component={Drivers} />
          <Route exact path={'/standings'} component={Standings} />
        </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchData())
});

export default withRouter(connect(null, mapDispatchToProps)(Routes));
