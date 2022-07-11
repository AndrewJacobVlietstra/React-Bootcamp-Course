class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machine!</h1>
        {/* <Hello to='Ringo' from='Paul' /> */}
        <Machine symbols = {['🍑', '🍇', '🍒']}/>
        <Machine symbols = {['🍕', '🔥', '🦊']}/>
        <Machine symbols = {['💲', '🙌', '🚀']}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
