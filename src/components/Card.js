import React from "react";

export default function Card(props) {
  console.log("card renderd")
  const startArray = props.startGame();
  const cards = startArray.map((name, index) => {
    return (
      <div key={index} className="card">
        <img
          name={name}
          onClick={props.checkWin}
          className="card-img"
          src={require(`../images/${name}.png`)}
        />
      </div>
    );
  });
  return <div className="card-container">{cards}</div>;
}
