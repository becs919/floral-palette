import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';


const Header = () => {
  return (
    <header>
      <NavLink to="/"><h1 className="header-text">Floral Palette</h1></NavLink>
    </header>
    )
  }

export default Header;
