import { connect } from 'react-redux';
import { setFavoriteTeam, removeFavoriteTeam } from '../../thunks/api';
import Team from './team';

const mapStateToProps = (
  {
    api: {
      teams, driverStandings, teamStandings, favoriteTeams,
    },
  },
  {
    match: {
      params: { id },
    },
  },
) => ({
  team: teams.find(({ constructorId }) => constructorId === id),
  drivers: driverStandings.filter(({ Constructors }) => Constructors[0].constructorId === id),
  teamStandings: teamStandings.find(({ Constructor: { constructorId } }) => constructorId === id),
  isFavorite: !!favoriteTeams.find(({ name }) => name === id),
  id,
});

const mapDispatchToProps = {
  setFavoriteTeam,
  removeFavoriteTeam,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Team);
