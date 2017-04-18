import React from 'react';

import '../styles/FlowerCard.css';


const FlowerCard = ({ flower, handleClick }) => {

  return (
    <div className="indv-flower">
      <img src={ flower.image }
           alt={ flower.flower_name }
      />
      <div className="flower-info">
        <p className="flower-name"> { flower.flower_name }</p>
        <p>Seasons: { flower.seasons.join(', ') } </p>
        <p>Colors: { flower.colors.join(', ') }   </p>
      </div>
      <button className="fav-button" onClick={ (e, id) => handleClick(e, flower.id) }>Favorite</button>
    </div>
  )
};

export default FlowerCard;
