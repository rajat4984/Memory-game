import React from "react";

export default function Score(props) {
  return (
    <div className="score-container">
      <div className="current-score-container">
        <h3 className="current-score">Current</h3>
        <p className="current-score-num">{props.current}</p>
      </div>

      <div className="high-score-container">
        <h3 className="high-score">High</h3>
        <p className="high-score-num">{props.high}</p>
      </div>
    </div>
  );
}
