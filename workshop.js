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

const Circles = (props) => {
  const [diameter, setDiameter] = React.useState(Math.ceil(Math.random() * 100 + 100));
  const generateColor = props.colorGenerator;
  const [circleColor, setColor] = React.useState(generateColor());
  
  return (
    <div
      style={{
        height: diameter,
        width: diameter,
        backgroundColor: circleColor,
        borderRadius: "50%",
      }}
      onClick={() => setColor(generateColor())}
    ></div>
  );
};

const Squares = (props) => {
  const [dimensions, setDimensions] = React.useState(Math.ceil(Math.random() * 100 + 100));
  const generateColor = props.colorGenerator;
  const [sqColor, setColor] = React.useState(generateColor());

  return (
    <div
      style={{
        height: dimensions,
        width: dimensions,
        backgroundColor: sqColor,
      }}
      onClick={() => setColor(generateColor())}
    ></div>
  );
};

const root = ReactDOM.createRoot(container);
root.render(<App />);
