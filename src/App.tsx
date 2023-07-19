import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Lever from "./components/Lever";
import Display from "./components/Display";
import { techChoices } from "./data/choices/techChoices";
import { taskChoices } from "./data/choices/taskChoices";
import { timeChoices } from "./data/choices/timeChoices";
import { typeChoices } from "./data/choices/typeChoices";
import { useState } from "react";
import { AllReelsState, ReelIdx, SpinState } from "./types";
import ReelUnit from "./components/ReelUnit";
import { reelConfigs } from "./data/ReelConfigs";

let chosenIdxs: number[] | null[] = [null, null, null, null];

function App() {
  const [allReelsState, setAllReelsState] = useState<AllReelsState>([
    {
      spinState: SpinState.PRE,
      chosenIdx: null,
    },
    {
      spinState: SpinState.PRE,
      chosenIdx: null,
    },
    {
      spinState: SpinState.PRE,
      chosenIdx: null,
    },
    {
      spinState: SpinState.PRE,
      chosenIdx: null,
    },
  ]);

  function cycleAllSpinStates() {
    console.log("cycleAllSpinStates", allReelsState);
    setAllReelsState((prevState) => {
      const newAllReelsState = [...prevState];
      newAllReelsState.forEach((reelState, idx) => {
        newAllReelsState[idx].spinState = getNextSpinState(reelState.spinState);
      });
      return newAllReelsState as AllReelsState;
    });
  }

  function cycleSpinState(reelIdx: ReelIdx): void {
    console.log("cycleSpinState", reelIdx);
    setAllReelsState((prevState) => {
      const currSpinState = prevState[reelIdx].spinState;
      const newAllReelsState = [...prevState];
      newAllReelsState[reelIdx].spinState = getNextSpinState(currSpinState);
      return newAllReelsState as AllReelsState;
    });
  }

  function setRandChoices() {
    setAllReelsState((prevState) => {
      const newAllReelsState = [...prevState];
      newAllReelsState.forEach((reelState, idx) => {
        reelState.chosenIdx = chosenIdxs[idx];
      });
      return newAllReelsState as AllReelsState;
    });
  }

  function onPullLever() {
    const combinedSpinState = getCombinedSpinState(allReelsState);
    console.log("onPullLever", combinedSpinState);
    if (combinedSpinState !== SpinState.PRE) return;
    // getRandChoices();
    // setRandChoices();
    cycleAllSpinStates();
  }

  // const universalCssClasses = userIsDragging ? "user-dragging" : "";

  const displayText =
    "Cloud Challenge: Stocks using Amazon DynamoDB in 120 minutes";

  function onClickTestBtn() {
    const combinedSpinState = getCombinedSpinState(allReelsState);
    if (!combinedSpinState) {
      return;
    } else if (combinedSpinState === SpinState.IDLE_LOOP) {
      getRandChoices();
      setRandChoices();
    } else {
      cycleAllSpinStates();
    }
  }

  return (
    <div className="App">
      <GameContainer>
        <button className="test-btn" onClick={onClickTestBtn}>
          {getCombinedSpinState(allReelsState) || "Mixed"}
        </button>
        <div className="reels-container">
          {allReelsState.map((reelState, idx) => {
            return (
              <ReelUnit
                name={reelConfigs[idx].name}
                key={reelConfigs[idx].name}
                spinState={reelState.spinState}
                choices={reelConfigs[idx].choices}
                chosenIdx={reelState.chosenIdx}
                cycleSpinState={() => cycleSpinState(idx)}
              />
            );
          })}
        </div>
        <div className="lever-container">
          <Lever onPull={onPullLever} />
        </div>
        <div className="display-container">
          <Display text={displayText} />
        </div>
        <Machine />
      </GameContainer>
    </div>
  );
}

function getCombinedSpinState(allReelsState: AllReelsState): SpinState | null {
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
  console.log(chosenIdxs);
  chosenIdxs = newChosenIdxs;
}

function getRandIdx(maxIdx: number) {
  return Math.floor(Math.random() * maxIdx);
}

function getNextSpinState(spinState: SpinState) {
  switch (spinState) {
    case SpinState.PRE:
      return SpinState.IDLE_START;
    case SpinState.IDLE_START:
      return SpinState.IDLE_LOOP;
    case SpinState.IDLE_LOOP:
      return SpinState.STOPPING;
    case SpinState.STOPPING:
      return SpinState.POST;
    case SpinState.POST:
      return SpinState.PRE;
    default:
      throw new Error("Invalid spin state");
  }
}

export default App;
