import Flowers from '../components/Flowers.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Flowers);
