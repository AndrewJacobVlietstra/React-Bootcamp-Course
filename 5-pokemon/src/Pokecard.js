import React from "react";

const Pokecard = ({id, name, type, exp}) => {
  const pokeImgSrc = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard" key={id}>
      <h2>{name}</h2>
      <h4>{type}</h4>
      <img src={pokeImgSrc} />
    </div>
  );
};

export default Pokecard;
