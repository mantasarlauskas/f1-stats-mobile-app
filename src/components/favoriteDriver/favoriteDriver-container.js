import { connect } from 'react-redux';
import FavoriteDriver from './favoriteDriver';

const mapStateToProps = ({ api: { driverStandings } }, { name: driverId }) => ({
  driverPosition: driverStandings.find(({ Driver: { driverId: dId } }) => dId === driverId),
});

export default connect(mapStateToProps)(FavoriteDriver);
