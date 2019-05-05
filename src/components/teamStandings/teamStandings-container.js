import { connect } from 'react-redux';
import TeamStandings from './teamStandings';

const mapStateToProps = ({ api: { isLoading, teamStandings } }) => ({
  teamStandings,
  isLoading,
});

export default connect(mapStateToProps)(TeamStandings);
