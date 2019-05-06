import { connect } from 'react-redux';
import FavoriteTeam from './favoriteTeam';

const mapStateToProps = ({ api: { teamStandings } }, { name: teamId }) => ({
  teamPosition: teamStandings.find(({ Constructor: { constructorId: id } }) => id === teamId),
});

export default connect(mapStateToProps)(FavoriteTeam);
