import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Lever from "./components/Lever";
import Display from "./components/Display";
import ReelUnit from "./components/ReelUnit";
import { useAppSelector } from "./store/hooks";
import { selectCursorDragState } from "./store/cursor/cursorSlice";
import { selectReels } from "./store/reels/reelsSlice";
import HelpBtn from "./components/HelpBtn";
import { selectHelpStateMenu } from "./store/help/helpSlice";
import HelpMenu from "./components/HelpMenu";

function App() {
  const reels = useAppSelector(selectReels);
  const cursorIsDragging = useAppSelector(selectCursorDragState);
  const helpMenuIsOpen = useAppSelector(selectHelpStateMenu);

  return (
    <div className="App">
      {cursorIsDragging && <div className="cursor-dragging-screen-cover" />}
      <GameContainer>
        <HelpBtn />
        {helpMenuIsOpen && <HelpMenu />}
        <div className="reels-container">
          {reels.map(({ name }) => {
            return <ReelUnit name={name} key={name} />;
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
