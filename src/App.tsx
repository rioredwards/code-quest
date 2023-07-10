import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Sign from "./components/Sign";
import Lever from "./components/Lever";
import SpinLight from "./components/SpinLight";
import LockSwitch from "./components/LockSwitch";
import Display from "./components/Display";
import Reel from "./components/Reel";
import { techChoices } from "./data/techChoices";
import { taskChoices } from "./data/taskChoices";
import { timeChoices } from "./data/timeChoices";
import { typeChoices } from "./data/typeChoices";
import { useState } from "react";

export enum SpinState {
  PRE = "preSpin",
  IDLE = "idleSpin",
  STOPPING = "stoppingSpin",
  POST = "postSpin",
}

const signNames = ["TYPE", "TECH", "TASK", "TIME"];

function App() {
  const [spinState, setSpinState] = useState(SpinState.PRE);
  const [chosenIdxs, setChosenIdxs] = useState([0, 0, 0, 0]);
  const [userDragging, setUserDragging] = useState(false);
  const universalCssClasses = userDragging ? "user-dragging" : "";

  const signs = signNames.map((signName, id) => {
    return <Sign name={signName} key={id} />;
  });

  const lever = (
    <Lever setSpinState={setSpinState} setUserDragging={setUserDragging} />
  );

  const lights = [1, 2, 3, 4].map((id) => {
    return <SpinLight mode={spinState} key={id} />;
  });

  const lockSwitches = [1, 2, 3, 4].map((id) => {
    return <LockSwitch key={id} />;
  });

  const displayText =
    "Cloud Challenge: Stocks using Amazon DynamoDB in 120 minutes";
  const display = <Display text={displayText} />;

  const typeReel = (
    <Reel
      key={1}
      choices={typeChoices}
      chosenIdx={chosenIdxs[0]}
      spinState={spinState}
      isDraggable={true}
      setUserDragging={setUserDragging}
    />
  );

  const techReel = (
    <Reel
      key={2}
      choices={techChoices}
      chosenIdx={chosenIdxs[1]}
      spinState={spinState}
      isDraggable={true}
      setUserDragging={setUserDragging}
    />
  );

  const taskReel = (
    <Reel
      key={3}
      choices={taskChoices}
      chosenIdx={chosenIdxs[2]}
      spinState={spinState}
      isDraggable={true}
      setUserDragging={setUserDragging}
    />
  );

  const timeReel = (
    <Reel
      key={0}
      choices={timeChoices}
      chosenIdx={chosenIdxs[3]}
      spinState={spinState}
      isDraggable={true}
      setUserDragging={setUserDragging}
    />
  );

  function onClick() {
    if (spinState === SpinState.IDLE) {
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
      setChosenIdxs(newChosenIdxs);
    }
    setSpinState(cycleSpinState(spinState));
  }

  return (
    <div className={`App ${universalCssClasses}`}>
      <GameContainer>
        <button onClick={onClick}>{spinState}</button>
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

function getRandIdx(maxIdx: number) {
  return Math.floor(Math.random() * maxIdx);
}

function cycleSpinState(spinState: SpinState) {
  switch (spinState) {
    case SpinState.PRE:
      return SpinState.IDLE;
    case SpinState.IDLE:
      return SpinState.STOPPING;
    case SpinState.STOPPING:
      return SpinState.POST;
    case SpinState.POST:
      return SpinState.PRE;
  }
}

export default App;
