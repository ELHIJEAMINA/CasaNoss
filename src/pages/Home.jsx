import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; 



function Home() {
  
  return (
    <div className='Home'>
      {/* Banniere en haut */}
      <div className='banner'>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhoneAlt} className='icon' />
            <span className='text'>Téléphone :(+212) 7 72 86 51 09</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
            <span className='text'>Lundi - Samedi : 08:00 - 18:00</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <span className='text'>casanoss.siege@gmail.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
            <span className='text'>Agadir (Siège)</span>
          </div>
      </div>
      
      {/* Section principale */}
      <div className='home'>
        <div className="containya">
          <div className="image-section"></div>
          <div className="text-section">
            <h1>Bienvenue chez Casa<span className='name'>Noss !</span></h1>
            <h2>Le Meilleur Service de Nettoyage</h2>
            <p>
              Vous recherchez un service de nettoyage fiable et de qualité supérieure ? <br/><strong>Ne cherchez plus</strong> ! <strong>Casa<span className='name'>Noss</span></strong> est votre partenaire de confiance pour un espace propre, sain et impeccable. <br /> Découvrez la propreté qui redéfinit votre espace, un nettoyage à la hauteur de vos attentes !
            </p>
            <div className="button-container">
      <button className="long-button" ><a href='/Services'>Services</a></button>
      <button className="long-button transparent-button"><a href='/Contact'>Contactez-nous</a></button>
    </div>
          </div>
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
      <div className="contain">
  <div className="left-section">
    <h3>Service Professionnel</h3>
    <h1>Votre satisfaction est Notre priorité !</h1>
    <p>Votre expert en nettoyage à <span className='sp-cont'>Agadir</span>  et environs. Nous nous spécialisons dans le nettoyage professionnel pour les entreprises et les particuliers, avec un engagement ferme envers la qualité et l'efficacité. <br/> 
    Que ce soit pour des bureaux, des résidences ou des espaces commerciaux, notre équipe dédiée est là pour répondre à tous vos besoins de nettoyage avec des services personnalisés et respectueux de l'environnement.</p>
    <div className="button-container">
      <button className="long-button"><a href='/AboutUs'>Voir plus &#8594;</a></button>
      <button className="long-button transparent-button"><a href='/Services'>Nos services</a></button>
    </div>
  </div>
  <div className="right-section">
    <div className="image-wrapper">
      <div className="image-top">
        <img src="image1.jpg" alt="Image du haut" loading="lazy"/>
      </div>
      <div className="image-overlay">
        <img src="image2.jpg" alt="Image du bas" loading="lazy"/>
      </div>
    </div>
  </div>
</div>
<div className="layout">
  <div className="abo">
    <img src="abowt.jpg" alt="Image arrondie" className="rounded-image" loading="lazy"/>
  </div>
  <div className="abowt">
    <h1><strong>Qui sommes-nous ?</strong></h1>
    <h3> <strong>Société de Nettoyage Professionnel à <span className='pqnous'>Agadir, Taroudant et Marrakech .</span></strong></h3>
    <p> <strong>Casa<span className='pqnous'>Noss</span></strong> est une société de nettoyage fondée à Agadir, avec des  années d'expérience dans le domaine du nettoyage résidentiel, commercial et industriel. Depuis notre création, nous avons su nous imposer comme un acteur clé dans le secteur du nettoyage au Maroc, notamment dans les régions d'Agadir, Taroudant, et Marrakech.<br/>
 Nous nous engageons à offrir à nos clients un service de nettoyage de haute qualité, grâce à une équipe qualifiée et à l'utilisation de produits respectueux de l’environnement. Que vous soyez un particulier ou une entreprise, notre mission est de garantir la propreté de vos espaces, tout en respectant des normes strictes de durabilité.<br/>
 Avec des années d'expérience, nous avons perfectionné nos méthodes de travail et développé des solutions sur mesure pour répondre à tous types de besoins. Notre savoir-faire nous permet de traiter des tâches variées allant du nettoyage quotidien à des prestations plus spécialisées comme le nettoyage industriel, le nettoyage après chantier, ou encore le nettoyage de bureaux.<br/>
 Grâce à notre présence à Agadir, Taroudant, et Marrakech, nous assurons une couverture complète pour des services de proximité, rapides et efficaces.</p>
<a href='/AboutUs'>Voir plus&#8594;</a>
  </div>
  
  
</div>


<div className="box">
  <div className="lefti">
    <h3>Envie d'un espace propre et sain ?</h3>
    <h1>Laissez <strong>Casa<span className='pqnous'>Noss</span></strong>, experts en nettoyage faire le travail ! </h1>
    <p>Avec <strong>Casa<span className='pqnous'>Noss</span></strong> ne laissez pas la propreté attendre. Offrez à votre espace le soin qu'il mérite. <br /><strong>Réservez dès aujourd'hui</strong> ou <strong>Contactez-nous </strong>directement.</p>
    <div className="pub-buttons">
      <button className="pub-button"><a href='/Book'>Réservation &#8594;</a></button>
      <button className="pub-buttan"><a href='/Contact'>Contactez-nous</a></button>
    </div>
  </div>
</div>
<div className="panel">
  
  <h3> <strong> Découvrez Nos Services</strong></h3>
  <h1>Services de Nettoyage Professionnels</h1>
  <h4><strong>Explorez nos services de nettoyage professionnels adaptés à vos besoins à Agadir, Taroudant et Marrakech.</strong></h4>
  
  <div className="services">
    <div className="carda">
      <a href="/Services">
        <img src="burreau v2.jpg" alt="Service 1" loading="lazy"/>
        <p>Nettoyage de bureaux</p>
      </a>
    </div>
    <div className="carda">
      <a href="/Services">
        <img src="carpet.jpg" alt="Service 2" loading="lazy"/>
        <p>Nettoyage de canapé</p>
      </a>
    </div>
    <div className="carda">
      <a href="/Services">
        <img src="commerce.jpg" alt="Service 3" loading="lazy"/>
        <p>Nettoyage de commerces</p>
      </a>
    </div>
    <div className="carda">
      <a href="/Services">
        <img src="jar.jpg" alt="Service 4" loading="lazy"/>
        <p>Entretien des jardins</p>
      </a>
    </div>
    <div className="carda">
      <a href="/Services">
        <img src="cordiste.jpg" alt="Service 5" loading="lazy"/>
        <p>Cordistes des vitres</p>
      </a>
    </div>
    <div class="carda">
      <a href="/Services">
        <img src="sols.jpg" alt="Service 6" loading="lazy"/>
        <p>Nettoyage de sols</p>
      </a>
    </div>
</div>
</div>

<div className="frame">
  <img src="full.jpg" alt="Image de fond" className="background-image" loading="lazy"/>
  <div className="circle-content">
    <h1><strong>Experts en Nettoyage Professionnel</strong></h1>
    <h3><strong>Services à Agadir, Marrakech & Taroudant</strong></h3>
    <p>Avec <strong>Casa<span className='pqnous'>Noss</span></strong> Découvrez nos solutions écologiques et efficaces pour tous types de nettoyage.</p>
    <button><a href='/Book'><strong>Réservez dès maintenant </strong></a></button>
  </div>
</div>
<div className="wrapper">
<div className="left">
    <div className="top-images">
      <img src="restau.jpg" alt="Image 1" loading="lazy"/>
      <img src="jardinage.jpg" alt="Image 2" loading="lazy"/>
    </div>
    <div className="bottom-images">
      <img src="canape.jpg" alt="Image 3" loading="lazy"/>
      <img src="burreau v2.jpg" alt="Image 4" loading="lazy"/>
    </div>
  </div>
  <div className="text-sections">
    <h3>Pourquoi choisir <span className='wcu'>Casa</span>Noss ? </h3>
    <h1><strong>Plongez dans les raisons  de notre succès !</strong></h1>
    <div className="why-choose-us">
      <div className="reason">
          <span className="icen">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 20.6 6.4 19.2 5z" fill="#E1AD01"/>
    </svg>
  </span>
        <p>Experts en nettoyage à Agadir, Taroudant, et Marrakech.</p>
      </div>
      <div className="reason">
          <span className="icen">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 20.6 6.4 19.2 5z" fill="#E1AD01"/>
    </svg>
  </span>
        <p>Nettoyage résidentiel, commercial, et industriel sur mesure.</p>
      </div>
      <div className="reason">
          <span className="icen">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 20.6 6.4 19.2 5z" fill="#E1AD01"/>
    </svg>
  </span>
        <p>Satisfaction garantie pour chaque intervention.</p>
      </div>
      <div className="reason">
      <span className="icen">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 20.6 6.4 19.2 5z" fill="#E1AD01"/>
    </svg>
  </span>
        <p>Service client 24/7 pour répondre à toutes vos demandes.</p>
      </div>
      <div className="reason">
          <span className="icen">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 20.6 6.4 19.2 5z" fill="#E1AD01"/>
    </svg>
  </span>
        <p>Produits écologiques, respectueux de l'environnement.</p>
      </div>
     
      <div class="reason">
          <span class="icen">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 20.6 6.4 19.2 5z" fill="#E1AD01"/>
    </svg>
  </span>
        <p>Une expérience éprouvée avec des clients satisfaits.</p>
      </div>
      <div class="reason">
          <span class="icen">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 20.6 6.4 19.2 5z" fill="#E1AD01"/>
    </svg>
  </span>
        <p>Prix compétitifs sans compromis sur la qualité.</p>
      </div>
    </div>
 
    </div>
    </div>
    <div className="contact-cantainer">
  <h2><strong>Contactez-nous</strong></h2>
  <p><strong>Nous sommes à votre écoute pour répondre à toutes vos questions.</strong></p>
  
  <div className="contact-cards">
    <div className="cardcont">
      <div className="ison">
        <i className="fas fa-envelope"></i>
      </div>
      <h3>Email</h3>
      <p>Envoyez-nous un message à <strong>casanoss.siege@gmail.com</strong></p>
    </div>


    <div class="cardcont">
      <div class="ison">
        <i class="fas fa-phone"></i>
      </div>
      <h3>Téléphone</h3>
      <p>Appelez-nous au <strong>(+212) 7 72 86 51 09</strong></p>
    </div>

   
    <div class="cardcont">
      <div class="ison">
        <i class="fas fa-map-marker-alt"></i>
      </div>
      <h3>Notre Bureau</h3>
      <p>Visitez-nous à <strong>Agadir</strong></p>
    </div>
  </div>
</div>
<div className="Contner">
  <div className="locations-section">
    {/* Lien qui redirige vers Google Maps */}
    <a
      href="https://www.google.com/maps/place/30%C2%B024'18.5%22N+9%C2%B003'27.4%22W"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block' }} // Assure que le lien couvre la carte
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d220505.65770190198!2d-9.482451107180799!3d30.28264669106126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI0JzE4LjUiTiA5wrAzMycyNy40Ilc!5e0!3m2!1sfr!2sma!4v1723663069281!5m2!1sfr!2sma"
        width="1500"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </a>
  </div>
</div>
    </div>
  );
}

export default Home;