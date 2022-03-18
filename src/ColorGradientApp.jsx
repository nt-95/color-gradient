import "./ColorGradientApp.css";
import React from "react";
import BreakPointSelector from "./widgets/BreakpointSelector";
import RotationSelector from "./widgets/RotationSelector";
import Gradient from "./widgets/Gradient";

const ColorGradientApp = () => {
  return (
    <div className="color-gradient-app">
      <BreakPointSelector />
      <BreakPointSelector />
      <BreakPointSelector />
      <RotationSelector />
      <Gradient />
    </div>
  );
};

export default ColorGradientApp;
