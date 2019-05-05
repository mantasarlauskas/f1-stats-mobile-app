import { connect } from 'react-redux';
import Schedule from './schedule';

const mapStateToProps = ({ api: { races, isLoading } }) => ({
  races: races.filter(({ date }) => new Date() < new Date(date)),
  isLoading,
});

export default connect(mapStateToProps)(Schedule);
