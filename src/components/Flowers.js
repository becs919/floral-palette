import React, { Component } from 'react';
import '../styles/Flowers.css';


export default class Flowers extends Component {

  render(){
    const { data, flowers } = this.props;

    return (
      <div className="flowers-div">
      <h2>{data.season} Wedding Floral Palette</h2>
        <div className="color-palette">
          {data.colors.map((color, i) => <div key={i} style={{backgroundColor: data.colors[i]}}>{ color }</div>)}
        </div>
        {flowers.map((flower, i) => flower.colors.includes(data.colors[0] || data.colors[1] || data.colors[2] )? <p key={i}>{flower.flower_name}, {flower.seasons}, {flower.colors}</p>: null)}
      </div>
    )
  }
}
