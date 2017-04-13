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
        {flowers.map((flower, i) => (flower.colors.includes(data.colors[0] || data.colors[1] || data.colors[2] ) && (flower.seasons.includes(data.season)))? <div className="indv-flower"key={i}><p>{flower.flower_name}</p> <p>{flower.seasons}</p><p>{flower.colors}</p><img src={flower.image}/></div>: null)}
      </div>
    )
  }
}
