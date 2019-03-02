import {
  setTeams,
  setDrivers,
  toggleLoading,
  setDriverStandings,
  setTeamStandings
} from '../actions/api';
import axios from 'axios';

const getDrivers = () => async (dispatch) => {
  const {
    data: { MRData: { DriverTable: { Drivers } } }
  } = await axios.get('http://ergast.com/api/f1/2018/drivers.json');
  dispatch(setDrivers(Drivers));
};

const getTeams = () => async (dispatch) => {
  const {
    data: { MRData: { ConstructorTable: { Constructors } } }
  } = await axios.get('http://ergast.com/api/f1/2018/constructors.json');
  dispatch(setTeams(Constructors));
};

const getDriverStandings = () => async (dispatch) => {
  const {
    data: { MRData: { StandingsTable: { StandingsLists } } }
  } = await axios.get('http://ergast.com/api/f1/2018/driverStandings.json');
  dispatch(setDriverStandings(StandingsLists[0].DriverStandings));
};

const getTeamStandings = () => async (dispatch) => {
  const {
    data: { MRData: { StandingsTable: { StandingsLists } } }
  } = await axios('https://ergast.com/api/f1/2018/constructorStandings.json');
  dispatch(setTeamStandings(StandingsLists[0].ConstructorStandings));
};

export const fetchData = () => async (dispatch) => {
  dispatch(toggleLoading());
  await dispatch(getDrivers());
  await dispatch(getTeams());
  await dispatch(getDriverStandings());
  await dispatch(getTeamStandings());
  dispatch(toggleLoading());
};
