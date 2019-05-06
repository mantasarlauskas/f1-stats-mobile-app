import { connect } from 'react-redux';
import { setFavoriteDriver, removeFavoriteDriver } from '../../thunks/api';
import Driver from './driver';

const mapStateToProps = (
  { api: { drivers, driverStandings, favoriteDrivers } },
  {
    match: {
      params: { id },
    },
  },
) => ({
  driver: drivers.find(({ driverId }) => driverId === id),
  team: driverStandings.find(({ Driver: { driverId } }) => driverId === id),
  isFavorite: !!favoriteDrivers.find(({ name }) => name === id),
  id,
});

const mapDispatchToProps = {
  setFavoriteDriver,
  removeFavoriteDriver,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Driver);
