import Flowers from '../components/Flowers.js';

import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveFav: (favorites) => {
    dispatch(actions.saveFav(favorites))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Flowers);
