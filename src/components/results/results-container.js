import { connect } from 'react-redux';
import Results from './results';

const mapStateToProps = ({ api: { races, isLoading } }) => ({
  races,
  isLoading,
});

export default connect(mapStateToProps)(Results);
