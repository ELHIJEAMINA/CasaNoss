// Services.js
import React from "react";
import { Link } from 'react-router-dom';
import './Services.css'; // Assurez-vous de créer ce fichier CSS
function  Services() {
  return (
    <div className='Service'>
      <div className="bonow">
  <div className="bonow-content">
  </div>
</div>
<div className="pani">
  <h3> <strong> Ce que Propose Casa<span className='pqnous'>Noss</span></strong></h3>
  <h1>Découvrez nos services de nettoyage, adaptés à vos besoins</h1>
  <h4><strong>Expert de nettoyage à Agadir, Taroudant et Marrakech.</strong></h4>
</div>
<div className="services-container">
  <div className="service-card">
    <img src="maison.jpg" alt="Service 1" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage Résidentiel</p>
    <div className="service-description">
      <p>Que vous ayez besoin d’un entretien régulier ou d’un grand ménage , nous adaptons notre intervention à vos besoins. Profitez d’un intérieur impeccable et d’une atmosphère propre et fraîche grâce à notre service de nettoyage de maison sur mesure. Nettoyage de sols, de fenêtres, de cuisines, et plus encore, nous nous assurons que votre maison soit un lieu agréable à vivre.</p>
    </div>
  </div>

  <div className="service-card">
    <img src="commerce.jpg" alt="Service 2" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage Commercial</p>
    <div className="service-description">
      <p>Nous offrons des solutions de nettoyage sur mesure pour les commerces, et espaces publics. Notre équipe garantit un nettoyage approfondi, respectant les normes d’hygiène les plus strictes pour créer un environnement de travail sain et productif.</p>
    </div>
  </div>

  <div className="service-card">
    <img src="finc.jpg" alt="Service 3" className="service-image" loading="lazy"/>
    <p className="service-title"> Nettoyage de fin de chantier</p>
    <div className="service-description">
      <p>Après un projet de construction, nous intervenons rapidement pour éliminer tous les débris et la poussière. Notre équipe s'assure que votre nouvel espace est prêt à être utilisé, propre et accueillant.</p>
    </div>
  </div>

  <div className="service-card">
    <img src="hopi.jpg" alt="Service 4" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage d’hôpitaux</p>
    <div className="service-description">
      <p>Nous comprenons l'importance d'un environnement stérile dans les établissements de santé. Nos services de nettoyage d’hôpitaux sont adaptés pour préserver la santé des patients et du personnel, en utilisant des produits désinfectants et des techniques spécifiques.</p>
    </div>
  </div>

  <div className="service-card">
    <img src="jardinage.jpg" alt="Service 5" className="service-image" loading="lazy"/>
    <p className="service-title">JARDINAGE</p>
    <div className="service-description">
      <p>Notre équipe veille à la santé de vos plantes et à l'esthétique de votre jardin, avec des services de tonte, taille et désherbage. On s'occupe de la taille, de l'arrosage et de l'aménagement de vos espaces verts.</p>
    </div>
  </div>

  <div className="service-card">
    <img src="marbr.jpeg" alt="Service 6" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage du sols</p>
    <div className="service-description">
      <p>Techniques adaptées pour nettoyer tous types de sols, assurant durabilité et brillance, qu'il s'agisse de carrelage, de moquette ou de bois, et entretenir et rénover les sols en marbre.</p>
    </div>
  </div>

  <div className="service-card">
    <img src="school.jpg" alt="Service 7" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage des écoles</p>
    <div className="service-description">
      <p>Garantissez un environnement d'apprentissage propre et sain pour les élèves et le personnel. Nous proposons un nettoyage régulier, incluant les salles de classe, les couloirs et les espaces communs.</p>
    </div>
  </div>

  <div className="service-card">
    <img src="corporité.jpg" alt="Service 8" className="service-image" loading="lazy"/>
    <p className="service-title">COPROPRIETE</p>
    <div className="service-description">
      <p>Maintenir les espaces communs propres et accueillants. Nos experts utilisent des produits écologiques pour l'entretien des halls d'entrée, escaliers et ascenseurs, assurant un cadre de vie agréable pour les résidents et contribuant à la valorisation de l'immeuble</p>
    </div>
  </div>

  <div className="service-card">
    <img src="party.webp" alt="Service 9" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage des événements</p>
    <div className="service-description">
      <p> Que ce soit pour un mariage, une conférence ou une fête, nous gérons le nettoyage après l'événement pour garantir une expérience agréable à tous .</p>
    </div>
  </div>

  <div className="service-card">
    <img src="buro.jpg" alt="Service 10" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage des bureaux</p>
    <div className="service-description">
      <p>Un bureau propre est essentiel pour le bien-être des employés. Nous proposons un nettoyage régulier ou ponctuel, incluant le dépoussiérage, le nettoyage des surfaces et l’entretien des espaces communs.</p>
    </div>
  </div>

  <div className="service-card">
    <img src="restau.jpg" alt="Service 11" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage des Restaurants</p>
    <div className="service-description">
      <p> Assurez à vos clients une expérience culinaire exceptionnelle dans un environnement impeccable grâce à nos services de nettoyage dédiés aux restaurants. Nous prenons en charge la propreté de votre cuisine, des salles à manger, et des espaces de service, garantissant des conditions d'hygiène conformes aux normes les plus strictes. Faites de la propreté une priorité pour votre restaurant</p>
    </div>
  </div>

  <div className="service-card">
    <img src="cordistes.jpg" alt="Service 12" className="service-image" loading="lazy"/>
    <p className="service-title">Cordistes des vitres</p>
    <div className="service-description">
      <p>Notre équipe de cordistes est formée pour nettoyer les vitres des bâtiments en hauteur, garantissant une visibilité impeccable tout en respectant les normes de sécurité..</p>
    </div>
  </div>

  <div className="service-card">
    <img src="industrie.jpg" alt="Service 13" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage INDUSTRIEL</p>
    <div className="service-description">
      <p>Nos services de nettoyage industriel s’adaptent aux besoins spécifiques des usines et des sites de production, incluant le nettoyage des machines, des sols et des zones de stockage.</p>
    </div>
  </div>
  <div className="service-card">
    <img src="canape.jpg" alt="Service 14" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage des moquettes</p>
    <div className="service-description">
      <p>Redonnez à vos moquettes leur éclat d'origine grâce à nos services professionnels de nettoyage des moquettes. Nous avons nettoyé profondément pour éviter les taches, la saleté et les allergies. Que ce soit pour votre domicile ou vos espaces commerciaux, nous assurons un entretien régulier qui prolonge la durée de vie de vos moquettes et améliore la qualité de l'air intérieur. </p>
    </div>
  </div>
  <div className="service-card">
    <img src="nuis.jpg" alt="Service 15" className="service-image" loading="lazy"/>
    <p className="service-title">Traitement des nuisibles</p>
    <div className="service-description">
      <p>Protégez votre espace des nuisibles grâce à nos solutions efficaces et respectueuses de l'environnement. Nous évaluons la situation et proposons des traitements adaptés aux besoins de chaque client.</p>
    </div>
  </div>
  <div className="service-card">
    <img src="hotel.jpg" alt="Service 16" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage des hotels </p>
    <div className="service-description">
      <p> Nous garantissons des chambres immaculées, des espaces communs impeccables, et des équipements d'une propreté irréprochable. Notre équipe qualifiée veille à chaque détail pour maintenir les plus hauts standards d'hygiène et de confort.</p>
    </div>
  </div>
  <div className="service-card">
    <img src="canp.jpg" alt="Service 17" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage de canapés</p>
    <div className="service-description">
      <p>Redonnez vie à vos canapés grâce à nos services de nettoyage spécialisés. Qu'il s'agisse de taches tenaces, de poussière incrustée ou d'odeurs désagréables, nous utilisons des méthodes de nettoyage efficaces pour restaurer l'éclat et la fraîcheur de vos canapés. Prolongez la durée de vie de vos meubles et profitez d'un intérieur plus propre et plus sain.</p>
    </div>
  </div>
  <div className="service-card">
    <img src="panno.jpg" alt="Service 18" className="service-image" loading="lazy"/>
    <p className="service-title">Nettoyage des panneaux solaires</p>
    <div className="service-description">
      <p>Maximisez l'efficacité de vos panneaux solaires avec nos services de nettoyage spécialisés. La poussière, la saleté et les débris peuvent réduire considérablement la performance de vos installations solaires. Notre équipe intervient rapidement pour un nettoyage en profondeur, vous permettant d'optimiser votre production d'énergie tout en prolongeant la durée de vie de vos panneaux.</p>
    </div>
  </div>
</div>
<div className='tetre'>
<h1>Pourquoi Nous Choisir ?</h1>
<h2>Votre Partenaire de Nettoyage de Confiance</h2>
</div>
<div className="w-o-u">
  <div className="caprd">
    <div className="wicon">
      <i className="fas fa-star"></i>
    </div>
    <h3>Qualité Garantie</h3>
    <p>Nous fournissons un service de nettoyage irréprochable avec une attention particulière aux détails.</p>
  </div>
  
  <div className="caprd">
    <div className="wicon">
      <i className="fas fa-leaf"></i>
    </div>
    <h3>Écologique</h3>
    <p>Nos produits de nettoyage respectent l’environnement et sont sans danger pour votre santé.</p>
  </div>
  
  <div className="caprd">
    <div className="wicon">
      <i className="fas fa-clock"></i>
    </div>
    <h3>Service Rapide</h3>
    <p>Nous respectons toujours vos délais pour garantir votre satisfaction.</p>
  </div>
  
  <div className="caprd">
    <div className="wicon">
      <i className="fas fa-users"></i>
    </div>
    <h3>Équipe Professionnelle</h3>
    <p>Nos agents de nettoyage sont hautement qualifiés et formés pour répondre à vos besoins.</p>
  </div>
  <div className="caprd">
  <div className="wicon">
    <i className="fas fa-calendar-alt"></i>
  </div>
  <h3>Flexibilité des Services</h3>
  <p>Nous offrons des horaires flexibles pour s'adapter à vos besoins, que ce soit pour un nettoyage ponctuel ou régulier.</p>
</div>
<div className="caprd">
  <div className="wicon">
    <i className="fas fa-dollar-sign"></i>
  </div>
  <h3>Tarification Transparente</h3>
  <p>Nous proposons des tarifs clairs et transparents, sans frais cachés, pour un service de nettoyage sans surprises.</p>
</div>

</div>

    </div>
   )
  }
export default Services;
