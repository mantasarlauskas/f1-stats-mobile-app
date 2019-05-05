import { connect } from 'react-redux';
import PitStops from './pitStops';

const mapStateToProps = ({ api: { drivers, driverStandings } }) => ({
  drivers,
  driverStandings,
});

export default connect(mapStateToProps)(PitStops);
