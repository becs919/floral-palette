import React, { Component } from 'react';
import '../styles/Flowers.css';


export default class Flowers extends Component {

  render(){
    const { data, flowers } = this.props;

    const divStyle = {
      backgroundColor: `${data.colors}`
    };

    return (
      <div className="flowers-div">
      <h2>{data.season} Wedding Floral Palette</h2>
        <div className="color-palette">
          {data.colors.map((color, i) => <div key={i} style={{backgroundColor: data.colors[i]}}>{ color }</div>)}
        </div>
        // {flowers.map((flower, i) => console.log(flower.name))}
      </div>
    )
  }
}
// <p key={i}>{flower.name}</p>
