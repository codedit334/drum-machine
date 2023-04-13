import React, { useEffect, useState } from "react";
import "./App.css";
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";

function App() {
  const [name, setName] = useState();

  const handleClick = (nameExtended) => {
    setName(nameExtended);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div id="drum-machine" className="App" style={mystyle.app}>
      <div className="drum-display" style={mystyle.drum_display}>
        <Display name={name} />
      </div>
      <div className="drum-keys" style={mystyle.drum_keys}>
        <DrumPad handleClick={handleClick} name={name} />
      </div>
    </div>
  );
}

const mystyle = {
  app: {
    display: "grid",
    placeItems: "center",
  },
  drum_display: {
    width: "500px",
    height: "70px",
    padding: "15px",
    color: "white",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    backgroundColor: "#191919",
    display: "flex",
    justifyContent: "center",
  },
  drum_keys: {
    width: "500px",
    padding: "15px",

    backgroundColor: "#191919",
  },
};

export default App;
