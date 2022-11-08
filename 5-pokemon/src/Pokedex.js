import React from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {

  const {drawnPokeData, teamEXP, opponentEXP} = props;

  let gameResult = teamEXP > opponentEXP ? <span style={{color: 'greenyellow'}}>Won!</span> : <span style={{color: 'salmon'}}>Lost!</span>;

  return (
    <>
      <div className="pokedex-container">
        {drawnPokeData.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}

      </div>
      <div className="team-exp-container">
        {'Team EXP:'} <span className="team-exp-span">{teamEXP}</span> <br/>
        {'Your team has '} <span className="lost-won-span">{gameResult}</span>
      </div>
    </>
  );
};

export default Pokedex;
