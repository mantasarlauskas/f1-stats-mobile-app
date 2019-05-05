import { connect } from 'react-redux';
import Results from './results';

const mapStateToProps = ({ api: { races, isLoading } }) => ({
  races: races.filter(({ date }) => new Date() > new Date(date)),
  isLoading,
});

export default connect(mapStateToProps)(Results);
