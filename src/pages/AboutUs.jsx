import React from "react";
import './AboutUs.css';



function AboutUs() {
  return (
    <div className='About'>
       <div className="bono">
  <div className="bono-content">
  </div>
</div>
<div className="pano">
  <h3> <strong> À propos de <strong>Casa<span className='pqnous'>Noss</span></strong></strong></h3>
  <h1>Services de Nettoyage Professionnels</h1>
  <h4><strong>Expert de nettoyage à Agadir, Taroudant et Marrakech.</strong></h4>
</div>
<div className="folder">
    <div className="left-text">
        <div className="text-container">
            <p><strong>Casa<span className='pqnous'>Noss</span></strong>, fondée à <strong>Agadir</strong>, est spécialisée dans le nettoyage professionnel, offrant des services d'excellence à travers le Maroc. Notre engagement envers la qualité et la satisfaction client nous a permis de devenir un acteur clé dans le secteur du nettoyage. Faites confiance à notre expertise pour un espace toujours propre et soigné.</p>
            <p>Nous proposons une gamme complète de services, allant du nettoyage résidentiel au nettoyage commercial, en passant par le nettoyage après déménagement. Nos équipes sont formées pour utiliser des techniques modernes et des produits respectueux de l'environnement.</p>
            <p>Nous croyons en l’importance d’un environnement sain et propre pour le bien-être de nos clients. Nos services sont conçus pour répondre aux besoins spécifiques de chaque espace, en utilisant des produits écologiques et des techniques de nettoyage avancées.</p>
            <p>Notre mission est de non seulement nettoyer, mais de créer des espaces où le confort et la sérénité se rencontrent. </p>
        </div>
    </div>
    <div className="right-images">
        <div className="image-container">
            <img src="image1.jpg" className="large-image" alt="Service Image" loading="lazy"/>
        </div>
        <div className="split-images">
            <img src="image2.jpg" className="small-image" alt="Service Image" loading="lazy"/>
            <img src="room.jpg" className="small-image" alt="Service Image" loading="lazy"/>
        </div>
    </div>
</div>
<div className="pano">
  <h3><strong>Notre Vision et  <span className='pqnous'>Notre Mission</span></strong></h3>
  <h1><strong>Votre Satisfaction, Notre Priorité</strong></h1>
</div>
<div className="dima">
  <div className="nina">
    <div className="icono">
      <i className="fas fa-leaf"></i> 
    </div>
    <h3>Durabilité</h3>
    <p>Nous nous engageons à utiliser des pratiques de nettoyage respectueuses de l'environnement, réduisant l'empreinte écologique.</p>
  </div>

  <div className="nina">
    <div className="icono">
      <i className="fas fa-users"></i>
    </div>
    <h3>Satisfaction Client</h3>
    <p>La satisfaction de nos clients est au cœur de notre mission. Nous offrons des services de qualité supérieure à travers le Maroc.</p>
  </div>

  <div className="nina">
    <div className="icono">
      <i className="fas fa-broom"></i>
    </div>
    <h3>Expertise</h3>
    <p>Avec des années d'expérience dans le nettoyage professionnel, CasaNoss garantit des résultats impeccables à chaque intervention.</p>
  </div>

  <div className="nina">
    <div className="icono">
      <i className="fas fa-shield-alt"></i>
    </div>
    <h3>Sécurité</h3>
    <p>Nous utilisons des produits non toxiques et des techniques sûres pour assurer un environnement sain et propre.</p>
  </div>
</div>
<div className="card-container">
  <div className="card">
    <img src="fast.png" alt="1" className="icons" loading="lazy"/>
    <h4>Service rapide</h4>
  </div>
  <div className="card">
    <img src="security.png" alt="2" className="icons" loading="lazy"/>
    <h4>Service sécurisé</h4>
  </div>
  <div className="card">
    <img src="team.png" alt="3" className="icons" loading="lazy"/>
    <h4>Employés experts</h4>
  </div>
  <div className="card">
    <img src="wallet.png" alt="4" className="icons" loading="lazy"/>
    <h4>Tarifs flexibles</h4>
  </div>
  <div className="card">
    <img src="satistafction.png" alt="5" className="icons" loading="lazy"/>
    <h4>100% Satisfaction</h4>
  </div>
  <div className="card">
    <img src="fastsupport.png" alt="6" className="icons" loading="lazy"/>
    <h4>Assistance rapide</h4>
  </div>
</div>
<div className="pano">
  <h3><strong>Casa<span className='pqnous'>Noss</span></strong></h3>
  <h1><strong>Témoignages de Clients</strong></h1>
</div>
<div className="testimonials">

  <div className="testimonials-container">
    <div className="testimonial-card">
      <div className="testimonial-icon">⭐</div>
      <div className="testimonial-text">
        <p>"Nous avons enfin trouvé un service de nettoyage qui répond vraiment à nos attentes. Leurs équipes sont professionnelles et la qualité du service est impeccable !"</p>
        <span className="testimonial-author">- Client Satisfait</span>
      </div>
    </div>
    <div className="testimonial-card">
      <div className="testimonial-icon">⭐</div>
      <div className="testimonial-text">
        <p>"Excellent service, équipe professionnelle et toujours à l'heure. Je recommande vivement!"</p>
        <span className="testimonial-author">- Maria D.</span>
      </div>
    </div>
    <div className="testimonial-card">
      <div className="testimonial-icon">⭐</div>
      <div className="testimonial-text">
        <p>"Un service irréprochable et des résultats au-delà de nos attentes. Merci à toute l'équipe!"</p>
        <span className="testimonial-author">- Ahmed B.</span>
      </div>
    </div>
    <div className="testimonial-card">
      <div className="testimonial-icon">⭐</div>
      <div className="testimonial-text">
        <p>"Un service de nettoyage impeccable. Toujours satisfaits du travail accompli!"</p>
        <span className="testimonial-author">- Fatima K.</span>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default AboutUs;
