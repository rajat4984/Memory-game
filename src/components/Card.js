import React from "react";

export default function Card(props) {
  const cards = props.startArray.map((name, index) => {
    return (
      <div key={index} className="card">
        <img
          name={name}
          onClick = {event=> props.checkWin(event,props.startArray)}
          className="card-img"
          src={require(`../images/${name}.png`)}
        />
      </div>
    );
  });
  return <div className="card-container">{cards}</div>;
}
