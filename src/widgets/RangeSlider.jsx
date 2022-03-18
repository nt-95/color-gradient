import React from "react";

const RangeSlider = ({ min = 0, max = 100, value, handleChange, name }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      name={name}
      className="rotation-selector__input"
    ></input>
  );
};

export default RangeSlider;
