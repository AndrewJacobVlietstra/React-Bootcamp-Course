import React from 'react';
import Pokedex from './Pokedex';
import { pokeData } from './PokeData';
import { drawHands, calculateWinningHand } from './pokeFunctions';

const Pokegame = () => {
  let { firstHand, secondHand } = drawHands(pokeData);
  let { firstHandEXPTotal, secondHandEXPTotal } = calculateWinningHand(firstHand, secondHand);

  return (
    <div className=''>
      <Pokedex drawnPokeData={firstHand} teamEXP={firstHandEXPTotal} opponentEXP={secondHandEXPTotal} />
      <Pokedex drawnPokeData={secondHand} teamEXP={secondHandEXPTotal} opponentEXP={firstHandEXPTotal} />
    </div>
  )
}

export default Pokegame;