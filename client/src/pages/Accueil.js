import React from 'react'

import dog from '../dog.jpg';
import dog4 from '../dog4.jpg';
import dog7 from '../dog7.jpg';
import Carousel from 'react-bootstrap/Carousel';

function Accueil () {
  return (
<Carousel style={{height:"500px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dog4}
          alt="First slide"
          style={{height:"600px"}}
        />
        <Carousel.Caption>
          <h3>Vous souhaitez acheter un chien ?</h3>
          <p>Voici des centaines d'annonces de chiens à vendre publiées
             par des différentes catégories de personnes .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dog}
          alt="Second slide"
          style={{height:"600px"}}
        />

        <Carousel.Caption>
          <h3>Vous cherchez d'où achetez votre chien?</h3>
          <p>Ce site est un site de référence pour les amoureux des chiens .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

       <Carousel.Caption> 
          <h3>vous ne savez pas quel chien choisir?</h3>
          <p>
            Chez nous vous découvrerez des différentes et plusieurs races.
          </p>
         </Carousel.Caption> 
        <img
          className="d-block w-100"
          src={dog7}
          alt="Third slide"
          style={{height:"600px"}}
        />

        
      </Carousel.Item>
    </Carousel>










  //   <div><img
  //   src={Capture5} 
  //   width="100%"
  //   height="100%"
    
  //   className="d-inline-block align-top"
  //   alt="accueil"
  // /></div>
  )
}

export default Accueil;