class Machine extends React.Component {
  render() {
    function spinSlotMachine() {
      let slotMachineArray = [];
      for (let i = 0; i < symbols.length; i++) {
        slotMachineArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }

      return slotMachineArray;
    }

    const props = this.props;
    const symbols = props.symbols;

    let randomArray = spinSlotMachine();
    
    const firstSymbol = randomArray[0]; // Get first symbol
    const areAllSymbolsEqual = randomArray.every(symbol => symbol === firstSymbol); // Every other symbol must be the same to win
    
    return(
      <div>
        {randomArray}
        <p>{areAllSymbolsEqual ? `You won congrats!` : `You lost!`}</p>
      </div>
    );
  }
}