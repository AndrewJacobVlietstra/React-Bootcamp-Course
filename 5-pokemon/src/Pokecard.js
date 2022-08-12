import React from "react";
import './Pokecard.css';

const Pokecard = ({id, name, type, exp}) => {
  const pokeImgSrc = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard-container">
      <h2>{name}</h2>
      <img className="poke-image" src={pokeImgSrc} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
