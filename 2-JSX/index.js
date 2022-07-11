function getThing() {
  let a = 10;
  const things = ['a', 'b', 'c'];
  const filteredThings = things.filter(thing => thing === 'b');
  
  return filteredThings;
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <h2>This is a JSX Demo!</h2>
        <br />
        <h1>My thing is: {getThing()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));