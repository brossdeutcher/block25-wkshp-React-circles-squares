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

  const generateSquare = () => {
    const dimensions = Math.ceil(Math.random() * 100 + 100);
    return (
      <div
        style={{
          height: dimensions,
          width: dimensions,
          backgroundColor: generateColor(),
        }}
      ></div>
    );
  };

  return (
    <>
      <section id="circles">
        <Circles colorGenerator={generateColor} />
        <Circles colorGenerator={generateColor} />
        <Circles colorGenerator={generateColor} />
      </section>
      <section id="squares">
        {generateSquare()}
        {generateSquare()}
        {generateSquare()}
      </section>
    </>
  );
};

const Circles = (props) => {
  const generateColor = props.colorGenerator;
  const diameter = Math.ceil(Math.random() * 100 + 100);
  return (
    <div
      style={{
        height: diameter,
        width: diameter,
        backgroundColor: generateColor(),
        borderRadius: "50%",
      }}
    ></div>
  );
};

const root = ReactDOM.createRoot(container);
root.render(<App />);
