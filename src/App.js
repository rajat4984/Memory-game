import "./App.css";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import Score from "./components/Score";
import Card from "./components/Card";
import { useState } from "react";
import GameOver from "./components/GameOver";
import Finished from "./components/Finished";

function App() {
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [cardRender, setCardRender] = useState(false);
  const [checkArray, setCheckArray] = useState([]);
  const [levelNum, setLevelNum] = useState(1);
  const [gameFinished, setGameFinished] = useState(false);
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

  //Shuffles the cards after every click
  const shuffle = (startArray) => {
    let shuffled = startArray;
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // if shuffled array is same as before it will shuffle again
    if (shuffled !== startArray) {
      shuffle(startArray);
    } else {
      setStartArray(shuffled);
    }
  };

  // gives the first array for the game
  const startGame = () => {
    const range1 = Math.floor(Math.random() * 16) + 1;
    const range2 = range1 + 4;
    const startArray = pokemonArray.slice(range1, range2);
    return startArray;
  };

  //concats more cards for next level
  const NewLevelArrayMaker = () => {
    const range1 = Math.floor(Math.random() * 18) + 1;
    const range2 = range1 + 2;
    const newArray = pokemonArray.slice(range1, range2);
    return newArray;
  };

  //makes the new level
  const startNextLevel = (prevLevelArray, level) => {
    let newArray = NewLevelArrayMaker();

    // if new cards given by NewLevelMaker are already in prev level array it will call NewLevelMaker again
    while (
      prevLevelArray.includes(newArray[0]) ||
      prevLevelArray.includes(newArray[1])
    ) {
      newArray = NewLevelArrayMaker();
    }
    setStartArray([...startArray, ...newArray]);
    setLevelNum(level);
    setCheckArray([]);
  };

  // starts new game after game over message appear on click of the button
  const startNewGame = () => {
    if (current > high) setHigh(current);
    setCurrent(0);
    setCheckArray([]);
    setStartArray(startGame());
    setLevelNum(1);
    if (gameOver === true) setGameOver(!gameOver);
    if (gameFinished === true){
      setGameFinished(!gameFinished);
      setHigh(0);
    } 
  };

  // checks if players has won the round

  const checkWin = (e, startArray) => {
    const element = e.target.getAttribute("name");

    // if element is includes in checkarray game will over
    if (checkArray.includes(element)) setGameOver(!gameOver);

    // if player clicks on all the cards he will go in next round
    else if (checkArray.length === startArray.length - 1 && levelNum === 5) {
      setGameFinished(!gameFinished);
    } else if (checkArray.length === startArray.length - 1) {
      startNextLevel(startArray, levelNum + 1);
      setCardRender(!cardRender);
    }

    // else the element clicked will go in checkarray
    else {
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
  } else if (gameFinished) {
    return (
      <div>
        <Navbar level={levelNum} brand={"Memory-game"} />
        <Finished startNewGame={startNewGame} />
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
