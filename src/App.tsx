import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Lever from "./components/Lever";
import Display from "./components/Display";
import ReelUnit from "./components/ReelUnit";
import { useAppSelector } from "./store/hooks";

function App() {
  const reels = useAppSelector((state) => state.reels);
  const cursorIsDragging = useAppSelector((state) => state.cursor.dragging);

  return (
    <div className="App">
      {cursorIsDragging && <div className="cursor-dragging" />}
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
