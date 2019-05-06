import axios from 'axios';
import {
  setTeams,
  setDrivers,
  toggleLoading,
  setDriverStandings,
  setTeamStandings,
  setRaces,
  setFavoriteDrivers,
  setFavoriteTeams,
} from '../actions/api';
import {
  getFavoriteDrivers,
  getFavoriteTeams,
  addFavoriteTeam,
  addFavoriteDriver,
  deleteFavoriteDriver,
  deleteFavoriteTeam,
} from '../../database';

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

const getFavorites = () => async (dispatch) => {
  const drivers = await getFavoriteDrivers();
  dispatch(setFavoriteDrivers(drivers));
  const teams = await getFavoriteTeams();
  dispatch(setFavoriteTeams(teams));
};

export const setFavoriteDriver = driver => async (dispatch) => {
  await addFavoriteDriver(driver);
  dispatch(getFavorites());
};

export const setFavoriteTeam = team => async (dispatch) => {
  await addFavoriteTeam(team);
  dispatch(getFavorites());
};

export const removeFavoriteDriver = driver => async (dispatch) => {
  await deleteFavoriteDriver(driver);
  dispatch(getFavorites());
};

export const removeFavoriteTeam = team => async (dispatch) => {
  await deleteFavoriteTeam(team);
  dispatch(getFavorites());
};

export const fetchData = () => async (dispatch) => {
  dispatch(toggleLoading());
  await dispatch(getDrivers());
  await dispatch(getTeams());
  await dispatch(getDriverStandings());
  await dispatch(getTeamStandings());
  await dispatch(getRaces());
  await dispatch(getFavorites());
  dispatch(toggleLoading());
};
