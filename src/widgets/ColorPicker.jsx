import React from "react";

const ColorPicker = ({ n, color, handleChange }) => {
  return (
    <input
      className={"color-picker"}
      type="color"
      value={color}
      name={`color${n}`}
      onChange={handleChange}
    />
  );
};

export default ColorPicker;
