import { connect } from 'react-redux';

import Form from '../components/Form.js';
import * as actions from '../actions/actions.js';


const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (data) => {
      dispatch(actions.saveForm(data))
    }
  }
};

export default connect(null, mapDispatchToProps)(Form);
