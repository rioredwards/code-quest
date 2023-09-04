import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Lever from "./components/Lever";
import Display from "./components/Display";
import ReelUnit from "./components/ReelUnit";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectCursorDragState } from "./store/cursor/cursorSlice";
import { selectReels } from "./store/reels/reelsSlice";
import { selectTutorialState } from "./store/tutorial/tutorialSlice";
import TutorialTarget from "./components/TutorialTarget";

function App() {
  const dispatch = useAppDispatch();
  const reels = useAppSelector(selectReels);
  const cursorIsDragging = useAppSelector(selectCursorDragState);
  const { tutIsActive } = useAppSelector(selectTutorialState);

  function onClickTutorial() {
    dispatch({ type: "tutorial/startTutorial" });
  }

  return (
    <div className="App">
      {cursorIsDragging && <div className="cursor-dragging-screen-cover" />}
      <GameContainer>
        {tutIsActive && <div className="tutorial-screen-cover" />}
        <div className="reels-container">
          {reels.map(({ name }) => {
            return <ReelUnit name={name} key={name} />;
          })}
        </div>
        <TutorialTarget childName="LEVER">
          <div className="lever-container">
            <Lever />
          </div>
        </TutorialTarget>
        <div className="display-container">
          <Display />
        </div>
        <Machine />
        <div className="pickers" />
        <button className="tutorial-btn" onClick={onClickTutorial}>
          Tutorial
        </button>
      </GameContainer>
    </div>
  );
}

export default App;
