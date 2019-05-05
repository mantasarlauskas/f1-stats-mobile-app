import { connect } from 'react-redux';
import Drivers from './drivers';

const mapStateToProps = ({ api: { drivers, driverStandings, isLoading } }) => ({
  drivers,
  driverStandings,
  isLoading,
});

export default connect(mapStateToProps)(Drivers);
