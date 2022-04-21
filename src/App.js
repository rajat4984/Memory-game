import "./App.css";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import Score from "./components/Score";
import Card from "./components/Card";
import { useState } from "react";
import NextLevel from "./components/NextLevel";
import GameOver from "./components/GameOver";

function App() {
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);
  // const [checkArray, setCheckArray] = useState([]);
  const [nextLevel, setNextLevel] = useState(false);
  const [gameOver, setGameOver] = useState(false);
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

  const checkArray = [];

  const startGame = () => {
    const range1 = Math.floor(Math.random() * 8) + 1;
    const range2 = range1 + 4;
    const startArray = pokemonArray.slice(range1, range2);
    return startArray;
  };

  const checkWin = (e) => {
    const element = e.target.getAttribute("name");
    if (checkArray.includes(element)) {
      console.log("You lost the game");
      setGameOver(!gameOver);
    } else if (checkArray.length === 3) {
      console.log("You won the level");
      setNextLevel(!nextLevel);
    } else {
      checkArray.push(element);
    }
  };

  if (nextLevel) {
    return (
      <div>
        <Navbar brand={"Memory-game"} />
        <NextLevel />
      </div>
    );
  } else if (gameOver) {
    return (
      <div>
        <Navbar brand={"Memory-game"} />
        <GameOver />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar brand={"Memory-game"} />
        <Rules />
        <Score current={current} high={high} />
        <Card startGame={startGame} checkWin={checkWin} />
      </div>
    );
  }
}

export default App;
