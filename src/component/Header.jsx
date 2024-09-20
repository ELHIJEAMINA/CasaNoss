import React from 'react';
import './Header.css'; // Créez un fichier CSS séparé pour les styles

const Header = () => {
  return (


<header className="header">
      <div className="logo">
        <img src="logo.jpg" alt="Logo" loading="lazy" />
      </div>
      <nav className="nav-links">
  <a href="/">Acceuil</a>
  <a href="/AboutUs">Apropos</a>
  <a href="/Services">Services</a>
  <a href="/Contact">Contact</a>
  <a href="/Book" className="reservation">Réservation</a> {/* Ajout de la classe "reservation" */}
</nav>
</header>
    
  );
};

export default Header;