import { connect } from 'react-redux';
import Favorites from './favorites';

const mapStateToProps = ({ api: { isLoading, favoriteDrivers, favoriteTeams } }) => ({
  isLoading,
  favoriteDrivers,
  favoriteTeams,
});

export default connect(mapStateToProps)(Favorites);
