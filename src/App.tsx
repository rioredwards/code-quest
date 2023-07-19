import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Sign from "./components/Sign";
import Lever from "./components/Lever";
import SpinLight from "./components/SpinLight";
import LockSwitch from "./components/LockSwitch";
import Display from "./components/Display";
import Reel from "./components/Reel";
import { techChoices } from "./data/choices/techChoices";
import { taskChoices } from "./data/choices/taskChoices";
import { timeChoices } from "./data/choices/timeChoices";
import { typeChoices } from "./data/choices/typeChoices";
import { useState } from "react";
import { AllReelsState, ReelIdx, SpinState } from "./types";
import ReelUnit from "./components/ReelUnit";

const signNames = ["TYPE", "TECH", "TASK", "TIME"];

let chosenIdxs: number[] | null[] = [null, null, null, null];

function App() {
  const [userIsDragging, setUserIsDragging] = useState(false);
  const [spinState, setSpinState] = useState(SpinState.PRE);
  const [isLocked, setIsLocked] = useState(false);
  const [allReelsState, setAllReelsState] = useState<AllReelsState>([
    {
      name: "TYPE",
      choices: typeChoices,
      spinState: SpinState.PRE,
      chosenIdx: null,
    },
    {
      name: "TECH",
      choices: techChoices,
      spinState: SpinState.PRE,
      chosenIdx: null,
    },
    {
      name: "TASK",
      choices: taskChoices,
      spinState: SpinState.PRE,
      chosenIdx: null,
    },
    {
      name: "TIME",
      choices: timeChoices,
      spinState: SpinState.PRE,
      chosenIdx: null,
    },
  ]);

  const universalCssClasses = userIsDragging ? "user-dragging" : "";

  const lever = (
    <Lever
      spinState={spinState}
      setSpinState={setSpinState}
      setUserIsDragging={setUserIsDragging}
    />
  );

  const displayText =
    "Cloud Challenge: Stocks using Amazon DynamoDB in 120 minutes";
  const display = <Display text={displayText} />;

  function onClickTestBtn() {
    if (spinState === SpinState.IDLE_LOOP) {
      getRandChoices();
    }
    setSpinState(cycleSpinState(spinState));
  }

  return (
    <div className={`App ${universalCssClasses}`}>
      <GameContainer>
        <button onClick={onClickTestBtn}>{spinState}</button>
        <div className="reels-container">
          {allReelsState.map((reelState, idx) => {
            return (
              <ReelUnit
                name={reelState.name}
                key={reelState.name}
                spinState={reelState.spinState}
                choices={reelState.choices}
                chosenIdx={reelState.chosenIdx}
                setSpinState={setSpinState}
                setUserIsDragging={setUserIsDragging}
                getRandChoices={getRandChoices}
              />
            );
          })}
        </div>
        <div className="lever-container">
          <Lever
            spinState={spinState}
            setSpinState={setSpinState}
            setUserIsDragging={setUserIsDragging}
          />
        </div>
        <div className="display-container">
          <Display text={displayText} />
        </div>
        <Machine />
      </GameContainer>
    </div>
  );
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

function cycleSpinState(spinState: SpinState) {
  switch (spinState) {
    case SpinState.PRE:
      return SpinState.IDLE_START;
    case SpinState.IDLE_START:
      return SpinState.IDLE_START;
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
