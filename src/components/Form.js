import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Form.css';
import seasonData from '../data/seasons.js';
import colorData from '../data/colors.js';


export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      season: '',
      colors: []
    }
  };

  // css style for when selected for both season and colors

  handleSeasonClick(e) {
    this.setState({ season: e.target.innerText });
  }

  handleColorClick(e) {
    let color = e.target.innerText;
    if (this.state.colors.length <= 2) {
      this.state.colors.push(color);
    }
    // if you add more than three - it unshifts the first one and adds the new one?
    // or when you click it again, it removes it from state
  }

  render() {
    return(
      <div className="form-container">
        <h2>Tell Us About Your Wedding</h2>

        <h3>Season</h3>
        <div className="season">
          {seasonData.map((season, i) => <button onClick={ (e) => this.handleSeasonClick(e) } key={ i }>{season}</button>)}
        </div>

        <h3>Pick up to 3 Colors</h3>
        <div className="colors-div">
          {colorData.map((color, i) => <button style={{backgroundColor: color}} className="color" onClick={ (e) => this.handleColorClick(e) } key={ i }>{color}</button>)}
        </div>

        <NavLink to ="/flowers">
          <button className="Submit" onClick={() => this.props.saveForm(this.state) }>Submit</button>
        </NavLink>
      </div>

    )
  }
};

Form.propTypes = {
  season: React.PropTypes.string,
  colors: React.PropTypes.array
};
