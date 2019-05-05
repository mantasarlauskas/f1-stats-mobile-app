import { connect } from 'react-redux';
import Team from './team';

const mapStateToProps = (
  { api: { teams, driverStandings, teamStandings } },
  {
    match: {
      params: { id },
    },
  },
) => ({
  team: teams.find(({ constructorId }) => constructorId === id),
  drivers: driverStandings.filter(({ Constructors }) => Constructors[0].constructorId === id),
  teamStandings: teamStandings.find(({ Constructor: { constructorId } }) => constructorId === id),
});

export default connect(mapStateToProps)(Team);
