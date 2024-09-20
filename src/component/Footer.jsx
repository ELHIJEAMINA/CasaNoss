import React from 'react';
import './Footer.css'; // Assurez-vous que le chemin est correct

function Footer() {
  return (
    <div className="footer-basic">
      <footer>
     
        <div className="social">
        <a
    data-mdb-ripple-init
    className="btn text-white btn-floating m-1"
    style={{ backgroundColor: '#25D366' }}  // Couleur officielle de WhatsApp
    href="https://wa.me/655760051"  // Remplacez par votre numéro WhatsApp au format international
    role="button"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="https://www.instagram.com/bio_cleaners_services"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>


          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#333333' }}
            href="https://www.tiktok.com/@bio_cleaners "
            role="button"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
        <div className="footer-content">
          <div className="footer-logo">
          <img src="/logo.jpg" alt="Logo" className="logo" loading="lazy"/>
           <div><p className='footer-text'>Expert en nettoyage à Agadir, Taroudant, et Marrakech. <br /> Nos services professionnels garantissent un environnement propre, <br /> sain et respectueux de l'environnement.  <br />Nous sommes votre partenaire pour un nettoyage impeccable.</p></div>
          </div>
          <div className="footer-links"> 
            <h3>Liens Utiles</h3>
            <ul>
              <li><a href="/AboutUs">À Propos de Nous</a></li>
              <li><a href="/Services"> Services</a></li>
              <li><a href="/Contact"> Contact</a></li>
              <li><a href="/Book"> Réservation</a></li>
            </ul>
          
          </div>
          <div className="footer-contact">
    <h3> Contacts</h3>
    <ul>
        <li> Tél : <a href="tel:+0655760051">+212 655760051 </a></li>
        <li> Addresse : <a href=''>Agadir(Siège) , Marrakech , Taroudant</a> </li>
        <li>Email: <a href="mailto:Biocleaners@service.com">casanoss.siege@gmail.com</a></li>
    </ul>
</div>

        </div>
        <div className='bb1'>
        <p className="copyright">2024 © All rights reserved by <span className='bb'>Bio Cleaners Services</span></p>
        </div>
       
      
    
      </footer>
    </div>
  );
}

export default Footer;
