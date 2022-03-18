import React from "react";
import RangeSlider from "./RangeSlider";
import ColorPicker from "./ColorPicker";
import "./ColorSelector.css";

const ColorSelector = ({ n, breakpoint, color, handleChange }) => {
  return (
    <div className="color-selector">
      <section className="color-selector__color-picker">
        <label>{`Color Selector ${n}`}</label>
        <ColorPicker
          n={n}
          name={`color${n}`}
          color={color}
          handleChange={handleChange}
        />
      </section>
      <section className="color-selector__range-slider">
        <label>{`Breakpoint Selector ${n}`}</label>
        <RangeSlider
          min="1"
          max="100"
          value={breakpoint}
          name={`breakpoint${n}`}
          handleChange={handleChange}
        />
      </section>
    </div>
  );
};

export default ColorSelector;
