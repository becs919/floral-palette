import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Flowers.css';
import FlowerCard from './FlowerCard';


export default class Flowers extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  };

  addFav( e, id ) {

    !this.state.favorites.includes(id) ? this.state.favorites.push(id) :   this.state.favorites.splice(this.state.favorites.indexOf(id), 1 );

    if (this.state.favorites.includes(id)) {
      e.target.innerHTML = "Remove"
      e.target.style.backgroundColor = "lightcoral"
    } else if (!this.state.favorites.includes(id)) {
      e.target.innerText = "Favorite"
      e.target.style.backgroundColor = "inherit"
    }

    this.setState({ favorites: this.state.favorites })
    this.props.saveFav(this.state.favorites);
  }

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
              <div className="flower-card-div" key={flower.id}>
                <FlowerCard flower={ flower }
                  key={ flower.id }
                  handleClick={ (e, id) => this.addFav(e, id) }

                  />
                <button className="fav-button" onClick={ (e, id) => this.addFav(e, flower.id) }>Favorite</button>
              </div>
            )
        };

        if (data.colors[1] && flower.colors.includes(data.colors[1].split(' ')[0])) {
          return (
            <div className="flower-card-div" key={flower.id}>
              <FlowerCard flower={ flower }
                key={ flower.id }
                handleClick={ (e, id) => this.addFav(e, id) }
                />
              <button className="fav-button" onClick={ (e, id) => this.addFav(e, flower.id) }>Favorite</button>
            </div>
          )
        };


        if (data.colors[2] && flower.colors.includes(data.colors[2].split('')[0])) {
          return (
            <div className="flower-card-div" key={flower.id}>
              <FlowerCard flower={ flower }
                key={ flower.id }
                handleClick={ (e, id) => this.addFav(e, id) }
                />
              <button className="fav-button" onClick={ (e, id) => this.addFav(e, flower.id) }>Favorite</button>
            </div>
          )
        };

      };
    });


    return (
      <div className="flowers-div">

        <h2>{ data.season } Wedding Floral Palette</h2>

        { this.props.favorites.length > 0 && <NavLink to="/favorites">View Favorites</NavLink> }

        <div key={ Date.now() }
             className="colors">
             { colorPalette }
        </div>

        { flowerPalette }

      </div>
    )
  }
};

Flowers.propTypes = {
  favorites: React.PropTypes.array
};
