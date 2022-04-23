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
  const [nextLevel, setNextLevel] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [cardRender, setCardRender] = useState(false);
  const [checkArray, setCheckArray] = useState([]);
  const pokemonArray = [
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

  const shuffle = (startArray) => {
    for (let i = startArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [startArray[i], startArray[j]] = [startArray[j], startArray[i]];
    }
    setStartArray(startArray);
  };

  const startGame = () => {
    console.log("IN start game");
    const range1 = Math.floor(Math.random() * 8) + 1;
    const range2 = range1 + 4;
    const startArray = pokemonArray.slice(range1, range2);
    return startArray;
  };

  const levelArrayMaker = () => {
    const range1 = Math.floor(Math.random() * 10) + 1;
    const range2 = range1 + 2;
    const newArray = pokemonArray.slice(range1, range2);
    return newArray;
  };

  const startNextLevel = (prevLevelArray) => {
    let newArray = levelArrayMaker();

    while (
      prevLevelArray.includes(newArray[0]) ||
      prevLevelArray.includes(newArray[1])
    ) {
      newArray = levelArrayMaker();
    }
    setStartArray([...startArray, ...newArray]);
  };

  const checkWin = (e, startArray) => {
    const element = e.target.getAttribute("name");
    console.log(startArray);
    if (checkArray.includes(element)) {
      setGameOver(!gameOver);
    } else if (checkArray.length === 3) {
      // setNextLevel(!nextLevel);
      startNextLevel(startArray);
      setCardRender(!cardRender);
    } else {
      setCheckArray([...checkArray, element]);
      setCardRender(!cardRender);
      shuffle(startArray);
    }
  };

  const arr = startGame();
  const [startArray, setStartArray] = useState(arr);

  if (nextLevel) {
    return (
      <div>
        <Navbar brand={"Memory-game"} />
        <NextLevel level={1} />
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
        <Card startArray={startArray} checkWin={checkWin} />
      </div>
    );
  }
  // return (
  //   <div>
  //     <Navbar brand={"Memory-game"} />
  //     <Rules />
  //     <Score current={current} high={high} />
  //     <Card startArray={startArray} checkWin={checkWin} />
  //   </div>
  // );
}

export default App;
