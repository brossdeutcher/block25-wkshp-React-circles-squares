const container = document.querySelector(`#root`);

const App = () => {
  const generateColor = () => {
    const chars = "0123456789abcdef";
    var color = "#";
    for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <section id="circles">
        <Circles colorGenerator={generateColor} />
        <Circles colorGenerator={generateColor} />
        <Circles colorGenerator={generateColor} />
      </section>
      <section id="squares">
        <Squares colorGenerator={generateColor} />
        <Squares colorGenerator={generateColor} />
        <Squares colorGenerator={generateColor} />
      </section>
    </>
  );
};

const onClickFunc = () => {
  console.log(`onclick`);
}
onClickFunc();

const Circles = (props) => {
  const generateColor = props.colorGenerator;
  const diameter = Math.ceil(Math.random() * 100 + 100);
  const [circleColor, setColor] = React.useState(generateColor());
  const clickEvent = () => {
    setColor(generateColor());
  }
  return (
    <div
      style={{
        height: diameter,
        width: diameter,
        backgroundColor: circleColor,
        borderRadius: "50%",
      }}
      onClick={clickEvent}
    ></div>
  );
};

const Squares = (props) => {
  const generateColor = props.colorGenerator;
  const dimensions = Math.ceil(Math.random() * 100 + 100);
  const [sqColor, setColor] = React.useState(generateColor());
  const clickEvent = () => {
    setColor(generateColor());
  }
  return (
    <div
      style={{
        height: dimensions,
        width: dimensions,
        backgroundColor: sqColor,
      }}
      onClick={clickEvent}
    ></div>
  );
};

const root = ReactDOM.createRoot(container);
root.render(<App />);
