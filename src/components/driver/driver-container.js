import { connect } from 'react-redux';
import Driver from './driver';

const mapStateToProps = (
  { api: { drivers, driverStandings } },
  {
    match: {
      params: { id },
    },
  },
) => ({
  driver: drivers.find(({ driverId }) => driverId === id),
  team: driverStandings.find(({ Driver: { driverId } }) => driverId === id),
});

export default connect(mapStateToProps)(Driver);
