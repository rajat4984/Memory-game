import "./App.css";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import Score from "./components/Score";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar brand={"Memory-game"} />
      <Rules />
      <Score />
      <Card />
    </div>
  );
}

export default App;
