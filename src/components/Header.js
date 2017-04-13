import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';


const Header = () => {

  window.addEventListener('scroll', function () {
    document.body.classList[
      window.scrollY > 20 ? 'add': 'remove'
    ]('scrolled');
  });

  return (
    <header>
      <NavLink to="/"><h1 className="header-text">Floral Palette</h1></NavLink>
    </header>
    )
  }

export default Header;
