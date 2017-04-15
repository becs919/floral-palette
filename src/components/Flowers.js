import React, { Component } from 'react';
import '../styles/Flowers.css';
import FlowerCard from './FlowerCard';


export default class Flowers extends Component {

  render(){
    const { data, flowers } = this.props;

    const colorPalette = data.colors.map((color, i) => {
      return (
        <div key={ i }><div className="palette"style={{ backgroundColor: data.colors[i] }}></div><p>{ color }</p></div>
      )
    });

    const flowerPalette = flowers.map(flower => {
      if (flower.seasons.includes(data.season)) {

        if (flower.colors.includes(data.colors[0])) {
          return (
          <FlowerCard data={ data } flower={ flower } id={ flower.id } />
          )
        }

        if (flower.colors.includes(data.colors[1])) {
          return (
            <FlowerCard data={ data } flower={ flower } id={ flower.id } />
          )
        }

        if (flower.colors.includes(data.colors[2])) {
          return (
          <FlowerCard data={ data } flower={ flower } id={ flower.id } />
          )
        }
      }
    });

    return (
      <div className="flowers-div">

        <h2>{ data.season } Wedding Floral Palette</h2>

        <div className="color-palette">
          { colorPalette }
        </div>

        { flowerPalette }

      </div>
    )
  }
};
