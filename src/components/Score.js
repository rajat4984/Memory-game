import React from "react";

export default function Score() {
  return (
    <div className="score-container">
      <div className="current-score-container">
        <h3 className="current-score">Current</h3>
        <p className="current-score-num">0</p>
      </div>

      <div className="high-score-container">
        <h3 className="high-score">High</h3>
        <p className="high-score-num">0</p>
      </div>
    </div>
  );
}
