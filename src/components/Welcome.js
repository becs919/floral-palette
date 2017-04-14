import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Welcome.css';


const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h2>Our Story</h2>
        <p>
          Floral Palette is designed to help bride's and groom's planning their wedding florals a painless process. Whether you are preparing to meet with your florist, or having DIY florals at your wedding, Floral Palette will give you all the knowledge you need. It is as easy as selecting the season your wedding will be in and up to three colors from your color palette. Floral Palette will give you a list of flowers that are available during the season of your wedding and their available colors. Bring this list to your florist or have it ready to purchase the flowers on your own! 
        </p>
      </div>
      <NavLink to="/form"><button className="begin-button">Begin</button></NavLink>
    </div>
    )
  }

export default Welcome;
