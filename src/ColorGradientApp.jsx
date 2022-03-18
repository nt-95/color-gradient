import "./ColorGradientApp.css";
import React, { useState } from "react";
import Options from "./widgets/Options";

import Gradient from "./widgets/Gradient";

const ColorGradientApp = () => {
  const [selector, setSelector] = useState({
    rotation: 90,
    color1: "#6495ed", //cornflowerblue
    color2: "#ffc0cb", //pink
    color3: "#fffd05", //yellow
    breakpoint1: 0,
    breakpoint2: 50,
    breakpoint3: 100,
  });

  const handleChange = (e) => {
    const key = e.target.name;
    setSelector({ ...selector, [key]: e.target.value });
  };

  const style = {
    backgroundImage: `linear-gradient(${selector.rotation}deg, ${selector.color1} ${selector.breakpoint1}%,${selector.color2} ${selector.breakpoint2}%,${selector.color3} ${selector.breakpoint3}%)`,
  };

  return (
    <div className="color-gradient-app">
      <div className="color-gradient-app__container">
        <h1>CSS Color Gradient Selector</h1>
        <Options selector={selector} handleChange={handleChange} />
        <Gradient style={style} />
      </div>
    </div>
  );
};

export default ColorGradientApp;
