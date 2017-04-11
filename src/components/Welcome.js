import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Welcome.css';


const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h2>Our Story</h2>
        <p>
          Florem ipsum bell heather tasmanian blue gum mistletoe love lies bleeding honeysuckle. Safflower spring cinquefoil wormwood thrift, radnor lily false goat’s beard. Lavender scorpion orchid painter’s palette prince of Wales feather pink heath rosebay willowherb, lily. Moth orchid flame lily singapore orchid hop. Dill twinflower.Flower calla lily snowdrop dandelion bluebell cockscomb anemone. Waxflower flame tip safari sunset, gorse buttercup. Marigold, floss flower statice glory lily bell heather, sunflower. Queen Anne’s lace globeflower sea holly amaryllis brodiaea snow on the mountain bells of Ireland. Radnor lily.
        </p>
      </div>
      <NavLink to="/Form"><button className="begin-button">Begin</button></NavLink>
    </div>
    )
  }

export default Welcome;
