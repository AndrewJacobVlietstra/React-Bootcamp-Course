import React from "react";
import './Pokecard.css';
import { capitalize, padToThree } from "./pokeFunctions";

const Pokecard = ({id, name, type, exp}) => {
  const paddedID = padToThree(id);

  // const pokeImgSrc = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const pokeImgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedID}.png`

  let capitalizedType = capitalize(type);

  return (
    <div className="pokecard-container">
      <h2>{name}</h2>
      <img className="poke-image" src={pokeImgSrc} alt={name} />
      <p>Type: {capitalizedType}</p>
      <p>EXP: <span className="exp-number">{exp}</span></p>
    </div>
  );
};

export default Pokecard;
