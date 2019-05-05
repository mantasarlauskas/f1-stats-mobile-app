import { connect } from 'react-redux';
import Standings from './standings';

const mapStateToProps = ({ api: { isLoading } }) => ({
  isLoading,
});

export default connect(mapStateToProps)(Standings);
