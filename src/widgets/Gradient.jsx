import React from "react";
import "./Gradient.css";

const Gradient = ({ style }) => {
  return (
    <>
      <section className="color-gradient-app__gradient">
        <h2>Gradient</h2>
        <div className="gradient" style={style}></div>
      </section>
    </>
  );
};

export default Gradient;
