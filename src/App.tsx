import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Sign from "./components/Sign";

const signNames = ["TYPE", "TECH", "TASK", "TIME"];

function App() {
  const signs = signNames.map((signName) => {
    return <Sign name={signName} />;
  });

  return (
    <div className="App">
      <GameContainer>
        <Machine signs={signs}></Machine>
        {/* </Background> */}
      </GameContainer>
    </div>
  );
}

export default App;
