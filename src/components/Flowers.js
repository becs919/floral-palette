import React, { Component } from 'react';

import '../styles/Flowers.css';
import FlowerCard from './FlowerCard';
import colorData from '../data/colors.js';


export default class Flowers extends Component {

  render(){
    const { data, flowers } = this.props;

    const colorPalette = data.colors.map((color, i) => {
      return (
        <div className="palette-div" key={ i }>

          <div className="palette"
               style={{ backgroundColor: color.split(' ')[1] }}>
          </div>

          <p className="color-name">
            { color.split(' ')[0] }
          </p>

          <p className="color-hex">
            { color.split(' ')[1] }
          </p>

        </div>
      )
    });

    const flowerPalette = flowers.map(flower => {
      if (flower.seasons.includes(data.season)) {

        if ( data.colors[0] && flower.colors.includes(data.colors[0].split(' ')[0]) ) {
            return (
              <FlowerCard data={ data }
                          flower={ flower }
                          key={ flower.id }

              />
            )
        };

        if (data.colors[1] && flower.colors.includes(data.colors[1].split(' ')[0])) {
          return (
            <FlowerCard data={ data }
                        flower={ flower }
                        key={ flower.id }
            />
          )
        };


        if (data.colors[2] && flower.colors.includes(data.colors[2].split('')[0])) {
          return (
            <FlowerCard data={ data }
                        flower={ flower }
                        key={ flower.id }
            />
          )
        };

      };
    });

    return (
      <div className="flowers-div">

        <h2>{ data.season } Wedding Floral Palette</h2>

        <div key={ Date.now() }
             className="colors">
             { colorPalette }
        </div>

        { flowerPalette }

      </div>
    )
  }
};
