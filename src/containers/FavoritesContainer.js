import Favorites from '../components/Favorites.js';

import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => {
    dispatch(actions.removeFav(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
