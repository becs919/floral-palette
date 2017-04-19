import React from 'react';
import '../styles/FlowerCard.css';

import FlowerCard from './FlowerCard';

const Favorites = (props) => {

return (
  <div className="fav-div">
    {console.log(props.favorites)}
    {  props.flowers.map((flower, i) => {

      if (props.favorites.includes(flower.id)) {

        return (

          <div key={i} className="flower-card-div">

            <FlowerCard flower={ flower }
              key={ flower.id }
              />

            <button className="fav-button" onClick={ () => props.removeFav(flower.id) }>Remove</button>

          </div>

        )

      }
    })}
  </div>
)

}

export default Favorites;
