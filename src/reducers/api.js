const initialState = {
  drivers: [],
  teams: [],
  driverStandings: [],
  teamStandings: [],
  favoriteDrivers: [],
  favoriteTeams: [],
  races: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DRIVERS':
      return {
        ...state,
        drivers: action.payload,
      };
    case 'SET_TEAMS':
      return {
        ...state,
        teams: action.payload,
      };
    case 'TOGGLE_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case 'SET_DRIVER_STANDINGS':
      return {
        ...state,
        driverStandings: action.payload,
      };
    case 'SET_TEAM_STANDINGS':
      return {
        ...state,
        teamStandings: action.payload,
      };
    case 'SET_RACES':
      return {
        ...state,
        races: action.payload,
      };
    case 'SET_FAVORITE_DRIVERS':
      return {
        ...state,
        favoriteDrivers: action.payload,
      };
    case 'SET_FAVORITE_TEAMS':
      return {
        ...state,
        favoriteTeams: action.payload,
      };
    default:
      return state;
  }
};
