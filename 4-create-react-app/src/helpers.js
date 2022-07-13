// Returns a random item from the provided array
function randomFruitChoice(array) {
  let randomChoice = Math.floor(Math.random() * array.length);
  return array[randomChoice];
}

// Remove the first matching item from an array, otherwise return undefined
function removeItem(array, itemToRemove) {
  let existingItem = array.indexOf(itemToRemove);

  // If item does not exist return undefined
  if (existingItem === -1) {
    return undefined;
  }

  // Else the item must exist, filter out the existing item, keep all other items
  return array.filter((element, index) => index != existingItem);
}

export {randomFruitChoice, removeItem};