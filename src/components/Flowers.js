import React, { Component } from 'react';
import '../styles/Flowers.css';


export default class Flowers extends Component {

  render(){
    const { data, flowers } = this.props;

    const colorPalette = data.colors.map((color, i) => {
      return (
        <div key={i}><div style={{backgroundColor: data.colors[i]}}></div><p>{color}</p></div>
      )
    });

    const flowerPalette = flowers.map((flower, i) => {
      if (flower.seasons.includes(data.season)) {
        if (flower.colors.includes(data.colors[0])) {
          console.log('hey');
          return (
            <div className="indv-flower"key={i}>
              <p className="flower-name"> {flower.flower_name}</p>
              <img src={flower.image} alt={flower.flower_name}/>
              <p>Seasons: {flower.seasons}</p>
              <p>Colors: {flower.colors}</p>
            </div>
          )
        }
        if (flower.colors.includes(data.colors[1])) {
          console.log('hey');
          return (
            <div className="indv-flower"key={i}>
              <p className="flower-name"> {flower.flower_name}</p>
              <img src={flower.image} alt={flower.flower_name}/>
              <p>Seasons: {flower.seasons}</p>
              <p>Colors: {flower.colors}</p>
            </div>
          )
        }
        if (flower.colors.includes(data.colors[2])) {
          return (
            <div className="indv-flower"key={i}>
              <p className="flower-name"> {flower.flower_name}</p>
              <img src={flower.image} alt={flower.flower_name}/>
              <p>Seasons: {flower.seasons}</p>
              <p>Colors: {flower.colors}</p>
            </div>
          )
        }
      }
      else {
        <div>error, no flowers matching your colors and season. sorry, try again</div>
      }
    });

    return (
      <div className="flowers-div">

        <h2>{data.season} Wedding Floral Palette</h2>

        <div className="color-palette">
          { colorPalette }
        </div>

        { flowerPalette }
        
      </div>
    )
  }
};
