import React from "react";

const TitleBar = ({ text, size, bkgdColor }) => (
  <div
  className="titlebar-heading" 
  >
    <h2
      style={{
        fontSize: size || "18px",
        margin: 0,
      }}
    >
      {text}
    </h2>
  </div>
);

export default TitleBar;
