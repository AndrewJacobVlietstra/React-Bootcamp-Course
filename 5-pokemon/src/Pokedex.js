import React from 'react';
import './Pokedex.css'
import { pokeData } from './PokeData';
import Pokecard from './Pokecard';

const Pokedex = () => {
  return (
    <div className='pokedex-container'>
      {pokeData.map(pokemon => <Pokecard key={pokemon.id} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} />)}
    </div>
  )
}

export default Pokedex;