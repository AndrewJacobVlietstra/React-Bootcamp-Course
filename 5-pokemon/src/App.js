import './App.css';
import { pokeData } from './PokeData';
import Pokecard from './Pokecard';

function App() {

  return (
    <div className="App">
      {pokeData.map(pokemon => <Pokecard key={pokemon.id} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} />)}
    </div>
  );
}

export default App;
