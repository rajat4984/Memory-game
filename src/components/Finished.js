import React from "react";

function Finished(props) {
  return (
    <div className="center">
    <h1 className="game-finsihed-text">Game Finished</h1>
    <div className="btn-container">
      <button onClick={props.startNewGame} className="gameover-button">Play again</button>
    </div>
  </div>
  );
}

export default Finished;
