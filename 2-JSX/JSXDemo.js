function getThing() {
  let a = 10;
  const things = ["🦊", "🍕", "🔥"];
  const filteredThings = things.filter((thing) => thing === "🍕");

  return { filteredThings, a };
}

function randomNum() {
  return Number(Math.floor(Math.random() * 10) + 1); // random num from 1-10;
}

class JSXDemo extends React.Component {
  render() {
    const num = randomNum();

    return (
      <div>
        {/* <h1>Hello there!</h1>
        <h2>This is a JSX Demo!</h2> */}
        <h1>My thing is: {getThing().filteredThings}</h1>
        <p>
          {num === 5
            ? `My lucky number is ${num}!`
            : `${num} is not my lucky number!`}
        </p>
        {num == 5 ? (
          <iframe
            src="https://giphy.com/embed/l0EwZ6XsAiBxxEu2s"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        ) : null}
      </div>
    );
  }
}
