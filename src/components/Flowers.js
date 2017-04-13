import React, { Component } from 'react';
import '../styles/Flowers.css';


export default class Flowers extends Component {

  render(){
    const { data, flowers } = this.props;

    return (
      <div className="flowers-div">
      <h2>{data.season} Wedding Floral Palette</h2>
        <div className="color-palette">
          {data.colors.map((color, i) => <div key={i}><div style={{backgroundColor: data.colors[i]}}></div><p>{color}</p></div>)}
        </div>
        // {flowers.map((flower, i) => (flower.colors.includes(data.colors[0] || data.colors[1] || data.colors[2] ) && (flower.seasons.includes(data.season)))? <div className="indv-flower"key={i}><p className="flower-name"> {flower.flower_name}</p> <img src={flower.image} alt={flower.flower_name}/> <p>Seasons: {flower.seasons}</p><p>Colors: {flower.colors}</p></div>: null)}

        {flowers.map((flower, i) => flower.seasons.includes(data.season) && flower.colors.includes(data.colors[0]) ? <div className="indv-flower"key={i}><p className="flower-name"> {flower.flower_name}</p> <img src={flower.image} alt={flower.flower_name}/> <p>Seasons: {flower.seasons}</p><p>Colors: {flower.colors}</p></div>: null)}
      </div>
    )
  }
}

// if season matches season
// and if color matches colors
