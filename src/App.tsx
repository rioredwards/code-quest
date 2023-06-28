import { useState } from "react";
import "./App.css";
import ReelTwo, { SpinState } from "./ReelTwo";
import ReelThree from "./ReelThree";

const choices = [
  "0 React",
  "1 Typescript",
  "2 Javascript",
  "3 Python",
  "4 Rust",
  "5 Go",
  "6 C++",
  "7 C",
  "8 Java",
  "9 C#",
];

function App() {
  const [spinState, setSpinState] = useState<SpinState>("preSpin");
  const [chosenIdx, setChosenIdx] = useState<number>(0);

  function cycleSpinState() {
    switch (spinState) {
      case "preSpin":
        setSpinState("idleSpin");
        break;
      case "idleSpin":
        setSpinState("stoppingSpin");
        break;
      case "stoppingSpin":
        setSpinState("stopped");
        break;
      case "stopped":
        setSpinState("preSpin");
        break;
      default:
        setSpinState("preSpin");
        break;
    }
  }

  function onSpin() {
    cycleSpinState();
  }

  return (
    <div className="App">
      <button style={{ zIndex: 1 }} onClick={onSpin}>
        Spin
      </button>
      <input
        type="number"
        name="idx"
        id="chosenIdxInput"
        value={chosenIdx === undefined ? 0 : chosenIdx}
        onChange={(e) => setChosenIdx(parseInt(e.target.value))}
      />
      <ReelThree
        choices={choices}
        spinState={spinState}
        chosenIdx={chosenIdx}
      />
      <div>{spinState}</div>
      <div>{chosenIdx}</div>
    </div>
  );
}

export default App;
