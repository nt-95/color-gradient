import React from "react";
import ColorSelector from "./ColorSelector";
import RotationSelector from "./RotationSelector";

const Options = ({ selector, handleChange }) => {
  return (
    <section>
      <h2>Options</h2>
      <section className="color-gradient-app__selectors">
        <ColorSelector
          n={1}
          color={selector.color1}
          breakpoint={selector.breakpoint1}
          handleChange={handleChange}
        />
        <ColorSelector
          n={2}
          color={selector.color2}
          breakpoint={selector.breakpoint2}
          handleChange={handleChange}
        />
        <ColorSelector
          n={3}
          color={selector.color3}
          breakpoint={selector.breakpoint3}
          handleChange={handleChange}
        />
        <RotationSelector
          rotation={selector.rotation}
          handleChange={handleChange}
        />
      </section>
    </section>
  );
};

export default Options;
