import App from '../components/App.js';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => {
  return { flowers: state.flowers }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFlowers: (flowers) => {
      dispatch(actions.addFlowers(flowers));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
