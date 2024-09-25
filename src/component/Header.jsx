import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
    <div className="logo">
  <a href="/">
    <img src="logo.jpg" alt="Logo" loading="lazy" />
  </a>
</div>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Acceuil</a>
        <a href="/AboutUs">Apropos</a>
        <a href="/Services">Services</a>
        <a href="/Contact">Contact</a>
        <a href="/Book" className={`reservation ${isMenuOpen ? 'no-bg' : ''}`}>
          Réservation
        </a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close-icon">X</span>
        ) : (
          <span className="menu-icon-bar">☰</span>
        )}
      </div>
    </header>
  );
};

export default Header;
