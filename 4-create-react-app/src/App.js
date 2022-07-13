import React from "react";
import "./styles.css";
import { fruits } from './foods';
import { randomFruitChoice, removeItem } from './helpers';

function App() {

  let randomFruit = randomFruitChoice(fruits);

  const filteredFruits = removeItem(fruits, randomFruit);

  return (
    <div className="App">
      <h2>Fruits Module Exercise</h2>
      <p>Your random fruit is {randomFruit}.</p>
      <p>We have {filteredFruits} left.</p>
    </div>
  );
}

export default App;