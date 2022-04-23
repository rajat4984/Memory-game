import React from "react";
export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="brand-container">
        <a href="#" className="brand">
          {props.brand}
        </a>
      </div>
      <div className="level-container">
        <h4 className="level">
          Level {props.level}
        </h4>
      </div>
    </div>
  );
}
