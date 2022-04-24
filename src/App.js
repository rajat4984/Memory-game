import "./App.css";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import Score from "./components/Score";
import Card from "./components/Card";
import { useState } from "react";
import GameOver from "./components/GameOver";

function App() {
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [cardRender, setCardRender] = useState(false);
  const [checkArray, setCheckArray] = useState([]);
  const [levelNum, setLevelNum] = useState(1);
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
    "pokemon13",
    "pokemon14",
    "pokemon15",
    "pokemon16",
    "pokemon17",
    "pokemon18",
    "pokemon19",
    "pokemon20",
  ];

  const shuffle = (startArray) => {
    let tempArray = startArray;
    for (let i = tempArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
    }

    if (tempArray !== startArray) {
      shuffle(startArray);
    } else {
      setStartArray(tempArray);
    }
  };

  const startGame = () => {
    const range1 = Math.floor(Math.random() * 16) + 1;
    const range2 = range1 + 4;
    const startArray = pokemonArray.slice(range1, range2);
    return startArray;
  };

  const levelArrayMaker = () => {
    const range1 = Math.floor(Math.random() * 18) + 1;
    const range2 = range1 + 2;
    const newArray = pokemonArray.slice(range1, range2);
    return newArray;
  };

  const startNextLevel = (prevLevelArray, level) => {
    let newArray = levelArrayMaker();
    while (
      prevLevelArray.includes(newArray[0]) ||
      prevLevelArray.includes(newArray[1])
    ) {
      newArray = levelArrayMaker();
    }
    setStartArray([...startArray, ...newArray]);
    setLevelNum(level);
    setCheckArray([]);
  };

  const startNewGame = () => {
    if (current > high) setHigh(current);
    setCurrent(0);
    setCheckArray([]);
    setStartArray(startGame());
    setLevelNum(1);
    setGameOver(!gameOver);
  };

  const checkWin = (e, startArray) => {
    const element = e.target.getAttribute("name");

    if (checkArray.includes(element)) setGameOver(!gameOver);
    else if (checkArray.length === startArray.length - 1) {
      startNextLevel(startArray, levelNum + 1);
      setCardRender(!cardRender);
    } else {
      setCheckArray([...checkArray, element]);
      setCurrent((prev) => prev + 1);
      setCardRender(!cardRender);
      shuffle(startArray);
    }
  };

  const arr = startGame();
  const [startArray, setStartArray] = useState(arr);


  if (gameOver) {
    return (
      <div>
        <Navbar level={levelNum} brand={"Memory-game"} />
        <GameOver startNewGame={startNewGame} />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar level={levelNum} brand={"Memory-game"} />
        <Rules />
        <Score current={current} high={high} />
        <Card startArray={startArray} checkWin={checkWin} />
      </div>
    );
  }
}

export default App;
