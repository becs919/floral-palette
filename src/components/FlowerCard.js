import React from 'react';
import '../styles/FlowerCard.css';


const FlowerCard = ({ data, flower, id}) => {

  return (
    <div className="indv-flower" key={ id }>
      <img src={ flower.image } alt={ flower.flower_name }/>
      <p className="flower-name"> { flower.flower_name }</p>
      <p>Seasons: { flower.seasons }</p>
      <p>Colors: { flower.colors }</p>
    </div>
  )
}

export default FlowerCard;
