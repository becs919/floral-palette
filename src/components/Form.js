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

  handleSeasonClick(e) {
    this.setState({ season: e.target.innerText });
  };

  handleColorClick(e) {
    this.state.colors.length <= 3 ? this.addColor(e): null ;
  };

  addColor(e){
    let color = e.target.innerText;

    if (this.state.colors.length < 3 && !this.state.colors.includes(color)) {
      this.state.colors.push(color);
    } else if (!this.state.colors.includes(color)) {
      this.state.colors.shift();
      this.state.colors.push(color);
    } else if (this.state.colors.includes(color)) {
      this.state.colors.splice(this.state.colors.indexOf(color), 1 );
    }
    this.setState({ colors: this.state.colors })
  };


  render() {

    const seasons = seasonData.map((season, i) => {
      return (
        <button className={ this.state.season.includes(season) ? "activeSeasonButton" : "season-button" }
                onClick={ (e) => this.handleSeasonClick(e) }
                key={ i }>
                { season }
        </button>
      )
    });

    const selectedColors = this.state.colors.map((color, i) => {
        return (
          <div className="palette-div-form" key={ i }>

            <div className="palette-form"
                 style={{ backgroundColor: color.split(' ')[1] }}>
            </div>

            <p className="color-name-form">
              { color.split(' ')[0] }
            </p>

            <p className="color-hex-form">
              { color.split(' ')[1] }
            </p>

          </div>
        )
      });

    const colors = colorData.map((color, i) => {
      return (
        <div style={{ backgroundColor: colorData[i][1] }}
             className="color"
             onClick={ (e) => this.handleColorClick(e) }
             key={ i }>
             { colorData[i].join(' ') }
        </div>
      )
    });

    return (
      <div className="form-container">
        <h2>Tell Us About Your Wedding</h2>

        <h3>Season</h3>
        <div className="seasons">
          { seasons }
        </div>

        <h3>Pick up to 3 Colors</h3>
        <div className="selected-colors-div">
          { selectedColors }
        </div>

        <div className="colors-div">
          { colors }
        </div>

        { (this.state.season && this.state.colors[0]) && <NavLink to="/flowers">
          <button className="submit"
                  onClick={ () => this.props.saveForm(this.state) }>Submit
          </button>
          </NavLink> }
      </div>
    )
  };
};

Form.propTypes = {
  season: React.PropTypes.string,
  colors: React.PropTypes.array
};
