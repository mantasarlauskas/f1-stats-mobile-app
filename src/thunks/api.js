import axios from 'axios';
import {
  setTeams,
  setDrivers,
  toggleLoading,
  setDriverStandings,
  setTeamStandings,
  setRaces,
} from '../actions/api';

export const url = 'http://ergast.com/api/f1/2019';

const getDrivers = () => async (dispatch) => {
  const {
    data: {
      MRData: {
        DriverTable: { Drivers },
      },
    },
  } = await axios.get(`${url}/drivers.json`);
  dispatch(setDrivers(Drivers));
};

const getTeams = () => async (dispatch) => {
  const {
    data: {
      MRData: {
        ConstructorTable: { Constructors },
      },
    },
  } = await axios.get(`${url}/constructors.json`);
  dispatch(setTeams(Constructors));
};

const getDriverStandings = () => async (dispatch) => {
  const {
    data: {
      MRData: {
        StandingsTable: { StandingsLists },
      },
    },
  } = await axios.get(`${url}/driverStandings.json`);
  dispatch(setDriverStandings(StandingsLists[0].DriverStandings));
};

const getTeamStandings = () => async (dispatch) => {
  const {
    data: {
      MRData: {
        StandingsTable: { StandingsLists },
      },
    },
  } = await axios(`${url}/constructorStandings.json`);
  dispatch(setTeamStandings(StandingsLists[0].ConstructorStandings));
};

const getRaces = () => async (dispatch) => {
  const {
    data: {
      MRData: {
        RaceTable: { Races },
      },
    },
  } = await axios(`${url}.json`);
  dispatch(setRaces(Races));
};

export default () => async (dispatch) => {
  dispatch(toggleLoading());
  await dispatch(getDrivers());
  await dispatch(getTeams());
  await dispatch(getDriverStandings());
  await dispatch(getTeamStandings());
  await dispatch(getRaces());
  dispatch(toggleLoading());
};
