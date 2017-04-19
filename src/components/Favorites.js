import React from 'react';
import '../styles/FlowerCard.css';

import FlowerCard from './FlowerCard';

const Favorites = (props) => {

  return (
    <div className="fav-div">
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

      { !props.favorites.length && <p>You have no favorites!</p>}

    </div>
  )

};

export default Favorites;
