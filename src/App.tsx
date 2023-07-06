import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Sign from "./components/Sign";
import Lever from "./components/Lever";

const signNames = ["TYPE", "TECH", "TASK", "TIME"];

function App() {
  const signs = signNames.map((signName, id) => {
    return <Sign name={signName} key={id} />;
  });

  const lever = <Lever />;

  return (
    <div className="App">
      <GameContainer>
        <Machine signs={signs} lever={lever}></Machine>
      </GameContainer>
    </div>
  );
}

export default App;
