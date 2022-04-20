import React from "react";

export default function Card() {
  let pokemonArray = [
    "pokemon1",
    "pokemon2",
    "pokemon3",
    "pokemon4",
    "pokemon5",
    "pokemon6",
    "pokemon7",
    "pokemon8",
    "pokemon9",
    "pokemon10",
    "pokemon11",
    "pokemon12",
  ];

  const cards = pokemonArray.map((name, index) => {
    return (
      <div className="card">
        <img className="card-img" src={require(`../images/${name}.png`)} />
      </div>
    );
  });
  return (
    <div className="card-container">
      {cards}
    </div>
  );
}
