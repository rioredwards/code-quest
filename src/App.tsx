import { useState } from "react";
import "./App.css";
import ReelTwo, { SpinState } from "./ReelTwo";
import ReelThree from "./ReelThree";

const techChoices = [
  "React",
  "Typescript",
  "Javascript",
  "Python",
  "Rust",
  "Go",
  "C++",
  "C",
  "Java",
  "C#",
];

const categoryChoices = [
  "Leetcode",
  "Backend",
  "Frontend",
  "Fullstack",
  "CLI",
  "Database",
];

const timeChoices = [
  "1 Hour",
  "2 Hours",
  "3 Hours",
  "4 Hours",
  "5 Hours",
  "6 Hours",
];

const taskChoices = [
  "Two Sum",
  "Reverse String",
  "Contains Duplicate",
  "Valid Anagram",
  "Group Anagrams",
  "Top K Frequent Elements",
  "Valid Palindrome",
  "3Sum",
  "Container With Most Water",
  "Best Time to Buy And Sell Stock",
  "Longest Substring Without Repeating Characters",
  "Valid Parentheses",
  "Merge Two Sorted Lists",
  "Merge k Sorted Lists",
  "Swap Nodes in Pairs",
  "Reverse Nodes in k-Group",
  "Reverse Integer",
  "String to Integer (atoi)",
  "Palindrome Number",
  "Regular Expression Matching",
  "Container With Most Water",
  "Trapping Rain Water",
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
      <section className="reels-panel">
        <ReelThree
          choices={techChoices}
          spinState={spinState}
          chosenIdx={chosenIdx}
        />
        <ReelThree
          choices={categoryChoices}
          spinState={spinState}
          chosenIdx={chosenIdx}
        />
        <ReelThree
          choices={timeChoices}
          spinState={spinState}
          chosenIdx={chosenIdx}
        />
        <ReelThree
          choices={taskChoices}
          spinState={spinState}
          chosenIdx={chosenIdx}
        />
      </section>
      {/* <div>{spinState}</div>
      <div>{chosenIdx}</div> */}
    </div>
  );
}

export default App;
