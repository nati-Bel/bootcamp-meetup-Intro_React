import React from 'react';
import './animalCard.css';

function AnimalCard(props) {
    return (
      <div className="aC-cardContainer">
        <img class='aC-img'src={props.image} alt={props.title} />
        <div className="ac-cardText">
          <h3>{props.title}</h3>
          <p className='description'>{props.description}</p>
        </div>
      </div>
    );
  }
  

export default AnimalCard