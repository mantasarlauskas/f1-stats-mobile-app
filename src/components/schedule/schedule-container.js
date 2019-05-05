import { connect } from 'react-redux';
import Schedule from './schedule';

const mapStateToProps = ({ api: { races, isLoading } }) => ({
  races,
  isLoading,
});

export default connect(mapStateToProps)(Schedule);
