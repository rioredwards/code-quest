import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Lever from "./components/Lever";
import Display from "./components/Display";
import { useEffect, useState } from "react";
import { SpinState } from "./types";
import ReelUnit from "./components/ReelUnit";
import { useAppSelector } from "./store/hooks";
import { ReelsState } from "./store/reels/reelsSlice";

function App() {
  const reels = useAppSelector((state) => state.reels);
  const combinedSpinState = getCombinedSpinState(reels);
  const [displayIsActive, setDisplayIsActive] = useState(false);

  useEffect(() => {
    if (combinedSpinState === "POST") {
      setDisplayIsActive(true);
    }
  }, [combinedSpinState]);

  return (
    <div className="App">
      <GameContainer>
        <div className="spin-log">{combinedSpinState || "Mixed"}</div>
        <div className="reels-container">
          {reels.map((reel, idx) => {
            return (
              <ReelUnit
                name={reel.name}
                key={reel.name}
                spinState={reel.spinState}
              />
            );
          })}
        </div>
        <div className="lever-container">
          <Lever />
        </div>
        <div className="display-container">
          <Display isActive={displayIsActive} />
        </div>
        <Machine />
      </GameContainer>
    </div>
  );
}

function getCombinedSpinState(allReelsState: ReelsState): SpinState | null {
  const firstSpinState = allReelsState[0].spinState;
  const allSpinStatesAreEqual = allReelsState.every(
    (reelState) => reelState.spinState === firstSpinState
  );
  return allSpinStatesAreEqual ? firstSpinState : null;
}

export default App;
