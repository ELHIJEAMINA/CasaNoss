import React, { useEffect } from "react";
/* global gtag */
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
     // Ajouter la balise gtag.js
     const script = document.createElement("script");
     script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11270497323";
     script.async = true;
     document.head.appendChild(script);
 
     const inlineScript = document.createElement("script");
     inlineScript.innerHTML = `
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'AW-11270497323');
     `;
     document.head.appendChild(inlineScript);

    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        const service = document.getElementById('service').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Format WhatsApp message
        const whatsappMessage = `Nom: ${name}%0AVille: ${city}%0AService: ${service}%0ATéléphone: ${phone}%0AMessage: ${message}`;

        // Open WhatsApp with the message
        const whatsappUrl = `https://wa.me/212655760051?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        gtag('event', 'conversion', {'send_to': 'AW-11270497323/O-oKCLyDsdMZEKvImP4p'}); // Demande de devis conversion
        gtag('event', 'conversion', {'send_to': 'AW-11270497323/Va3iCL-DsdMZEKvImP4p'}); // Contact conversion
      });
    }
  }, []);

  return (
    <div className='contact'>
      <div className="boner">
        <div className="boner-content"></div>
      </div>
      <div className="pin">
        <h3><strong>Casa<span className='pqnous'>Noss</span></strong></h3>
        <h1>Services de Nettoyage Professionnels</h1>
        <h4><strong>Nous sommes à votre disposition pour toute question ou demande !</strong></h4>
      </div>
      <div className="contact-container">
        <div className="form-container">
          <h3>Nous sommes là pour vous !</h3>

          <form id="contactForm">
            <label htmlFor="name">Nom et Prénom</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="city">Ville</label>
            <select id="city" name="city" required>
              <option value="">Sélectionnez une ville</option>
              <option value="Agadir">Agadir</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Taroudant">Taroudant</option>
            </select>

            <label htmlFor="service">Type de service</label>
            <select id="service" name="service" required>
              <option value="Nettoyage résidentiel">Nettoyage résidentiel</option>
              <option value="Nettoyage commercial">Nettoyage commercial</option>
              <option value="Nettoyage de fin de chantier">Nettoyage de fin de chantier</option>
              <option value="Jardinage">Jardinage</option>
              <option value="Nettoyage des sols">Nettoyage des sols</option>
              <option value="Nettoyage des événements">Nettoyage des événements</option>
              <option value="Nettoyage des bureaux">Nettoyage des bureaux</option>
              <option value="Nettoyage des hôtels et restaurants">Nettoyage des hôtels et restaurants</option>
              <option value="Cordistes des vitres">Cordistes des vitres</option>
              <option value="Autre">Autre</option>
            </select>

            <label htmlFor="phone">Téléphone</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
      <div className="c-s">
        <h1 className="contact-title">Voici nos contacts</h1>
        <p className='chon'>Nous sommes toujours prêts à vous aider!</p>
        <div className="contact-cards">
          <div className="cls">
            <div className="icpn">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>casanoss.siege@gmail.com</p>
          </div>

          <div className="cls">
            <div className="icpn">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Adresse</h3>
            <p>Agadir, Maroc</p>
          </div>

          <div className="cls">
            <div className="icpn">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Téléphone</h3>
            <p>(+212) 7 72 86 51 09</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
