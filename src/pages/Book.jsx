import React, { useEffect } from 'react';
import './Book.css';


function Book() {
  useEffect(() => {
    const form = document.getElementById('reservationForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collecter les données du formulaire
        const nom = document.getElementById('nom').value;
        const ville = document.getElementById('ville').value;
        const telephone = document.getElementById('telephone').value;
        const email = document.getElementById('email').value;
        const quartier = document.getElementById('quartier').value;
        const service = document.getElementById('service-type').value;
        const date = document.getElementById('date').value;
        const chambres = document.getElementById('rooms').value;
        const communication = document.getElementById('communication').value;
        const informations = document.getElementById('message').value.trim();

        // Format du message pour WhatsApp avec retours à la ligne
        const whatsappMessage = `Réservation de service:\nNom: ${nom}\nVille: ${ville}\nTéléphone: ${telephone}\nEmail: ${email}\nQuartier: ${quartier}\nService: ${service}\nDate: ${date}\nNombre de chambres: ${chambres}\nMode de communication: ${communication}\nInformations supplémentaires: ${informations}`;

        // URL WhatsApp avec le message encodé
        const whatsappUrl = `https://wa.me/212622309354?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
      });
    }
  }, []);


  return (
    <div className="Book">
      <div className="bano">
        <div className="bano-content">
          <h1>
            <strong>
              Obtenez un devis et réservez <span className="rese">en 60 secondes !</span>
            </strong>
          </h1>
          <p><strong>Remplissez le formulaire ci-dessous pour prendre rendez-vous!</strong></p>
        </div>
      </div>

      <div className="reservation-container">
        <h1 className="reservation-title">Réservez Nos Services</h1>
        <form id="reservationForm" className="reservation-form">
          <div className="form-group">
            <label htmlFor="nom">Nom complet</label>
            <input type="text" id="nom" name="nom" placeholder="Votre nom complet" required />
          </div>

          <div className="form-group">
            <label htmlFor="ville">Ville</label>
            <select id="ville" name="ville" required>
              <option value="Agadir">Agadir</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Taroudant">Taroudant</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Numéro de téléphone</label>
            <input type="tel" id="telephone" name="telephone" placeholder="Ex: +212 6 00 00 00 00" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Ex: test@gmail.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="quartier">Quartier</label>
            <input type="text" id="quartier" name="quartier" placeholder="Entrez votre quartier" required />
          </div>

          <div className="form-group">
            <label htmlFor="service-type">Type de service</label>
            <select id="service-type" name="service-type" required>
              <option value="Nettoyage résidentiel">Nettoyage résidentiel</option>
              <option value="Nettoyage commercial">Nettoyage commercial</option>
              <option value="Nettoyage de fin de chantier">Nettoyage de fin de chantier</option>
              <option value="Jardinage">Jardinage</option>
              <option value="Nettoyage des sols">Nettoyage des sols</option>
              <option value="Nettoyage des événements">Nettoyage des événements</option>
              <option value="Nettoyage des bureaux">Nettoyage des bureaux</option>
              <option value="Nettoyage des hôtels et restaurants">Nettoyage des hôtels et restaurants</option>
              <option value="Cordistes des vitres">Cordistes des vitres</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date du service</label>
            <input type="date" id="date" name="date" required />
          </div>

          <div className="form-group">
            <label htmlFor="rooms">Nombre de chambres</label>
            <input type="number" id="rooms" name="rooms" placeholder="Ex: 3" required />
          </div>

          <div className="form-group">
            <label htmlFor="communication">Mode de communication</label>
            <select id="communication" name="communication" required>
              <option value="Téléphone">Téléphone</option>
              <option value="Email">Email</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Informations supplémentaires</label>
            <textarea id="message" name="message" rows="4" placeholder="Ajoutez des informations spécifiques ici..."></textarea>
          </div>

          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Book;
