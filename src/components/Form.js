import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import classNames from 'classnames';

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
    this.state.colors.length <= 3 ? this.addColor(e): this.removeColor(e);
  }

  addColor(e){
    let color = e.target.innerText;

    if (this.state.colors.length < 3 && !this.state.colors.includes(color)) {
      this.state.colors.push(color);
    } else if (!this.state.colors.includes(color)) {
      this.state.colors.shift()
      this.state.colors.push(color)
    } else if (this.state.colors.includes(color)) {
      this.state.colors.splice(this.state.colors.indexOf(color), 1 )
    }
    this.setState({colors: this.state.colors})
  }

  removeColor(e){
    this.state.colors.splice(0,1)
    this.setState({colors: this.state.colors})
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

        <NavLink to="/flowers">
          <button className="submit" onClick={() => this.props.saveForm(this.state) }>Submit</button>
          </NavLink>
      </div>
    )
  }
};

Form.propTypes = {
  season: React.PropTypes.string,
  colors: React.PropTypes.array
};
