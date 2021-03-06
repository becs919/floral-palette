import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FlowerData from '../data/flowers.js';
import '../styles/App.css';
import Header from './Header.js';
import Welcome from './Welcome.js';
import FormContainer from '../containers/FormContainer.js';
import FlowersContainer from '../containers/FlowersContainer.js';
import FavoritesContainer from '../containers/FavoritesContainer.js';

export default class App extends Component {

  componentDidMount() {
    this.props.addFlowers(FlowerData);
  };

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={ Welcome }></Route>
        <Route exact path="/form" component={ FormContainer }></Route>
        <Route path="/flowers" component={ FlowersContainer }></Route>
        <Route path="/favorites" component={ FavoritesContainer }></Route>
      </div>
    )
  }
};
