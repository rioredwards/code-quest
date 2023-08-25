import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Lever from "./components/Lever";
import Display from "./components/Display";
import { techChoices } from "./data/choices/techChoices";
import { taskChoices } from "./data/choices/taskChoices";
import { timeChoices } from "./data/choices/timeChoices";
import { typeChoices } from "./data/choices/typeChoices";
import { useEffect, useState } from "react";
import { SpinState } from "./types";
import ReelUnit from "./components/ReelUnit";
import { reelConfigs } from "./data/ReelConfigs";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { ReelsState } from "./store/reels/reelsSlice";
import { getRandIdx } from "./utils/genUtils";

let chosenIdxs: number[] | null[] = [null, null, null, null];

function App() {
  const dispatch = useAppDispatch();
  const reels = useAppSelector((state) => state.reels);
  const combinedSpinState = getCombinedSpinState(reels);

  const [displayIsActive, setDisplayIsActive] = useState(false);

  useEffect(() => {
    if (combinedSpinState === "POST") {
      setDisplayIsActive(true);
    }
  }, [combinedSpinState]);

  const onPullLever = () => {
    console.log("onPullLever");
    if (
      reels.every(
        ({ spinState }) => spinState !== "PRE" && spinState !== "POST"
      )
    ) {
      return;
    }

    setDisplayIsActive(false);
    getRandChoices();
    reels.forEach((reel, idx) => {
      if (reel.spinState === "POST") return;
      dispatch({
        type: "reels/spinStateUpdated",
        payload: {
          name: reel.name,
          spinState: "IDLE_START",
        },
      });
      dispatch({
        type: "reels/chosenIdxSet",
        payload: {
          name: reel.name,
          chosenIdx: chosenIdxs[idx],
        },
      });
    });
  };

  const onDisplayCompleteTyping = () => {
    console.log("onDisplayCompleteTyping");
    dispatch({
      type: "reels/allSpinStatesUpdated",
      payload: "PRE",
    });
  };

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
                choices={reelConfigs[idx].choices}
                chosenIdx={reel.chosenIdx}
              />
            );
          })}
        </div>
        <div className="lever-container">
          <Lever onPull={onPullLever} />
        </div>
        <div className="display-container">
          <Display
            isActive={displayIsActive}
            onCompleteTyping={onDisplayCompleteTyping}
          />
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

function getRandChoices() {
  const chosenTypeIdx = getRandIdx(typeChoices.length);
  const chosenTechIdx = getRandIdx(techChoices.length);
  const chosenTaskIdx = getRandIdx(taskChoices.length);
  const chosenTimeIdx = getRandIdx(timeChoices.length);
  const newChosenIdxs = [
    chosenTypeIdx,
    chosenTechIdx,
    chosenTaskIdx,
    chosenTimeIdx,
  ];
  chosenIdxs = newChosenIdxs;
}

function getNextSpinState(spinState: SpinState) {
  switch (spinState) {
    case "PRE":
      return "IDLE_START";
    case "IDLE_START":
      return "IDLE_LOOP";
    case "IDLE_LOOP":
      return "STOPPING";
    case "STOPPING":
      return "POST";
    case "POST":
      return "PRE";
    default:
      throw new Error("Invalid spin state");
  }
}

export default App;
