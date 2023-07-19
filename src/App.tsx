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

const signNames = ["TYPE", "TECH", "TASK", "TIME"];

let chosenIdxs: number[] | null[] = [null, null, null, null];

function App() {
  const [userIsDragging, setUserIsDragging] = useState(false);
  const [spinState, setSpinState] = useState(SpinState.PRE);
  const [locked, setLocked] = useState(false);
  const [allReelsState, setAllReelsState] = useState<AllReelsState>([
    {
      name: "TYPE",
      choices: typeChoices,
      spinState: SpinState.PRE,
      chosenIdx: null,
      isUserLocked: false,
    },
    {
      name: "TECH",
      choices: techChoices,
      spinState: SpinState.PRE,
      chosenIdx: null,
      isUserLocked: false,
    },
    {
      name: "TASK",
      choices: taskChoices,
      spinState: SpinState.PRE,
      chosenIdx: null,
      isUserLocked: false,
    },
    {
      name: "TIME",
      choices: timeChoices,
      spinState: SpinState.PRE,
      chosenIdx: null,
      isUserLocked: false,
    },
  ]);
  const universalCssClasses = userIsDragging ? "user-dragging" : "";

  const signs = signNames.map((signName, id) => {
    return <Sign name={signName} key={id} />;
  });

  const lever = (
    <Lever
      spinState={spinState}
      setSpinState={setSpinState}
      setUserIsDragging={setUserIsDragging}
    />
  );

  const lights = [1, 2, 3, 4].map((id) => {
    return (
      <SpinLight
        getRandChoices={getRandChoices}
        setSpinState={setSpinState}
        spinState={spinState}
        key={id}
      />
    );
  });

  const lockSwitches = [1, 2, 3, 4].map((id) => {
    return <LockSwitch key={id} locked={locked} setLocked={setLocked} />;
  });

  const displayText =
    "Cloud Challenge: Stocks using Amazon DynamoDB in 120 minutes";
  const display = <Display text={displayText} />;

  const typeReel = (
    <Reel
      key={1}
      choices={allReelsState[ReelIdx.TYPE].choices}
      chosenIdx={chosenIdxs[0]}
      spinState={spinState}
      setSpinState={setSpinState}
      setUserIsDragging={setUserIsDragging}
      isUserLocked={locked}
    />
  );

  const techReel = (
    <Reel
      key={2}
      choices={allReelsState[ReelIdx.TECH].choices}
      chosenIdx={chosenIdxs[1]}
      spinState={spinState}
      setSpinState={setSpinState}
      setUserIsDragging={setUserIsDragging}
      isUserLocked={locked}
    />
  );

  const taskReel = (
    <Reel
      key={3}
      choices={allReelsState[ReelIdx.TASK].choices}
      chosenIdx={chosenIdxs[2]}
      spinState={spinState}
      setSpinState={setSpinState}
      setUserIsDragging={setUserIsDragging}
      isUserLocked={locked}
    />
  );

  const timeReel = (
    <Reel
      key={0}
      choices={allReelsState[ReelIdx.TIME].choices}
      chosenIdx={chosenIdxs[3]}
      spinState={spinState}
      setSpinState={setSpinState}
      setUserIsDragging={setUserIsDragging}
      isUserLocked={locked}
    />
  );

  function onClickTestBtn() {
    if (spinState === SpinState.IDLE_LOOP) {
      getRandChoices();
      console.log(chosenIdxs);
    }
    setSpinState(cycleSpinState(spinState));
  }

  return (
    <div className={`App ${universalCssClasses}`}>
      <GameContainer>
        <button onClick={onClickTestBtn}>{spinState}</button>
        <Machine
          signs={signs}
          lights={lights}
          lever={lever}
          lockSwitches={lockSwitches}
          display={display}
          reels={[typeReel, techReel, taskReel, timeReel]}
        />
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
