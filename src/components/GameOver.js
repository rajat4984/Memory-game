import React from "react";

function Gameove(props) {
  return (
    <div className="center">
      <h1 className="game-over-text">Game over</h1>
      <div className="btn-container">
        <button onClick={props.startNewGame} className="gameover-button">Play again</button>
      </div>
    </div>
  );
}

export default Gameove;
