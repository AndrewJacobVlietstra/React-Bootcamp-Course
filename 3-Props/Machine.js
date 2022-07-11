class Machine extends React.Component {
  render() {
    const props = this.props;

    const randomArray = [];
    const symbols = props.symbols;
    for (let i = 0; i < symbols.length; i++) {
      randomArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    
    const firstSymbol = randomArray[0]; // Get first symbol
    const areAllSymbolsEqual = randomArray.every(symbol => symbol === firstSymbol); // Every other symbol must be the same to win
    console.log(areAllSymbolsEqual);
    return(
      <div>
        {randomArray}
        <p>
          {areAllSymbolsEqual ? `You won congrats!` : `You lost!`}
        </p>
      </div>
    );
  }
}