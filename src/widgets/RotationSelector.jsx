import React from "react";
import "./RotationSelector.css";
import RangeSlider from "./RangeSlider";

const RotationSelector = ({ rotation, handleChange }) => {
  return (
    <section className="rotation-selector">
      <label>Rotation Selector</label>
      <RangeSlider
        max="180"
        value={rotation}
        name={"rotation"}
        handleChange={handleChange}
      />
    </section>
  );
};

export default RotationSelector;
