import { connect } from 'react-redux';
import Favorites from './favorites';

const mapStateToProps = ({
  api: {
    driverStandings, teamStandings, isLoading, favoriteDrivers, favoriteTeams,
  },
}) => ({
  driverStandings,
  teamStandings,
  isLoading,
  favoriteDrivers,
  favoriteTeams,
});

export default connect(mapStateToProps)(Favorites);
