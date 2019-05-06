import { connect } from 'react-redux';
import DriverRow from './driverRow';

const mapStateToProps = ({ api: { driverStandings } }, { driverId }) => ({
  driverPosition: driverStandings.find(({ Driver: { driverId: dId } }) => dId === driverId),
});

export default connect(mapStateToProps)(DriverRow);
