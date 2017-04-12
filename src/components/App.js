import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FlowerData from '../data/flowers.js';
import '../styles/App.css';
import Header from './Header.js';
import Welcome from './Welcome.js';
import FormContainer from '../containers/FormContainer.js';
import FlowersContainer from '../containers/FlowersContainer.js';


export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      flowers: []
    }
  }

  componentDidMount() {
    this.props.addFlowers(FlowerData);
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={ Welcome }></Route>
        <Route exact path="/form" component={ FormContainer }></Route>
        <Route exact path="/flowers" component={ FlowersContainer }></Route>
      </div>
    )
  }
}

App.propTypes = {
  flowers: React.PropTypes.array,
};
