export function drawHands(data) {
  // Check if passed in data is an array and if it has 2 or more elements
  if (!Array.isArray(data)) {return 'Data must be of type array!'};
  if (data.length < 2) {return 'Array must be 2 items or greater!'};

  // Define our temporary 2 hands
  let firstHand = [];
  let secondHand = [];

  let arrLength = data.length;

  for (let i = 0; i < arrLength; i++) {
    // Get a random Element from array
    let randomElement = data[Math.floor(Math.random() * data.length)];

    // While first hand is less than half of array push into it, else push into second hand
    if (firstHand.length < arrLength / 2) {
      firstHand.push(randomElement);
    } else {
      secondHand.push(randomElement);
    }
    
    // Continuously update the data to clear out each randomly drawn pokemon
    data = data.filter(pokemon => pokemon.id !== randomElement.id);
  }
  
  return {firstHand, secondHand};
}

export function calculateWinningHand(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {return 'Data must be of type array!'};

  // Get experience values
  let arr1Values = arr1.map(p => p.base_experience);
  let arr2Values = arr2.map(p => p.base_experience);

  // Sum the experience values
  let firstHandEXPTotal = arr1Values.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  let secondHandEXPTotal = arr2Values.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return {firstHandEXPTotal, secondHandEXPTotal};
}