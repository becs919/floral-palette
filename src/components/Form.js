import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';

import '../styles/Form.css';


export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      season: '',
      colorOne: '',
      colorTwo: '',
      colorThree: ''
    }
  };

  // action - saveForm()

  handleSeasonChange() {
    let seasonSelection = document.querySelector('#season').value;
    this.setState({season: seasonSelection});
  }

  handleColorOneChange() {
    let colorSelection = document.querySelector('#colorOne').value;
    this.setState({colorOne: colorSelection});
  }

  handleColorTwoChange() {
    let colorSelection = document.querySelector('#colorTwo').value;
    this.setState({colorTwo: colorSelection});
  }

  handleColorThreeChange() {
    let colorSelection = document.querySelector('#colorThree').value;
    this.setState({colorThree: colorSelection});
  }

  render() {
    return(
      <div className="form-container">
        <h2>Tell Us About Your Wedding</h2>

        <h3>Season</h3>
        <select name="season" id="season" onChange={() => this.handleSeasonChange()}>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>

        <h3>Colors</h3>
        <select name="colorOne" id="colorOne" onChange={() => this.handleColorOneChange()}>
          <option value="White">White</option>
          <option value="Ivory">Ivory</option>
          <option value="Peach">Peach</option>
          <option value="Yellow">Yellow</option>
          <option value="Coral">Coral</option>
          <option value="Orange">Orange</option>
          <option value="Red">Red</option>
          <option value="Maroon">Maroon</option>
          <option value="Purple">Purple</option>
          <option value="Pink">Pink</option>
          <option value="Dusty Blue">Dusty Blue</option>
          <option value="Navy Blue">Navy Blue</option>
          <option value="Green">Green</option>
          <option value="Brown">Brown</option>
        </select>

        <select name="colorTwo" id="colorTwo" onChange={() => this.handleColorTwoChange()}>
          <option value="White">White</option>
          <option value="Ivory">Ivory</option>
          <option value="Peach">Peach</option>
          <option value="Yellow">Yellow</option>
          <option value="Coral">Coral</option>
          <option value="Orange">Orange</option>
          <option value="Red">Red</option>
          <option value="Maroon">Maroon</option>
          <option value="Purple">Purple</option>
          <option value="Pink">Pink</option>
          <option value="Dusty Blue">Dusty Blue</option>
          <option value="Navy Blue">Navy Blue</option>
          <option value="Green">Green</option>
          <option value="Brown">Brown</option>
        </select>

        <select name="colorThree" id="colorThree" onChange={() => this.handleColorThreeChange()}>
          <option value="White">White</option>
          <option value="Ivory">Ivory</option>
          <option value="Peach">Peach</option>
          <option value="Yellow">Yellow</option>
          <option value="Coral">Coral</option>
          <option value="Orange">Orange</option>
          <option value="Red">Red</option>
          <option value="Maroon">Maroon</option>
          <option value="Purple">Purple</option>
          <option value="Pink">Pink</option>
          <option value="Dusty Blue">Dusty Blue</option>
          <option value="Navy Blue">Navy Blue</option>
          <option value="Green">Green</option>
          <option value="Brown">Brown</option>
          <option value="N/A">N/A</option>
        </select>

        <button className="Submit">Submit</button>
      </div>

    )
  }
};

Form.propTypes = {
  season: React.PropTypes.string,
  colorOne: React.PropTypes.string,
  colorTwo: React.PropTypes.string,
  colorThree: React.PropTypes.string
};

// Make buttons module with a helper component that takes in the data and maps through it to make a value for each index of array.
// Then instansiate 3 versions of that button on this page
// add in a N/A option
// save color and season to state when selected
