import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Lever from "./components/Lever";
import Display from "./components/Display";
import ReelUnit from "./components/ReelUnit";
import { useAppSelector } from "./store/hooks";

function App() {
  const reels = useAppSelector((state) => state.reels);

  return (
    <div className="App">
      <GameContainer>
        <div className="reels-container">
          {reels.map((reel) => {
            return <ReelUnit name={reel.name} key={reel.name} />;
          })}
        </div>
        <div className="lever-container">
          <Lever />
        </div>
        <div className="display-container">
          <Display />
        </div>
        <Machine />
        <div className="pickers" />
      </GameContainer>
    </div>
  );
}

export default App;
