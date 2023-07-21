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
import {
  AllReelsState,
  ChallengeState,
  ReelIdx,
  ReelState,
  SpinState,
} from "./types";
import ReelUnit from "./components/ReelUnit";
import { reelConfigs } from "./data/ReelConfigs";

let chosenIdxs: number[] | null[] = [null, null, null, null];

function App() {
  const [challengeState, setChallengeState] = useState<ChallengeState>("NONE");
  const [challengeText, setChallengeText] = useState("");
  const [displayIsActive, setDisplayIsActive] = useState(false);
  const [allReelsState, setAllReelsState] = useState<AllReelsState>([
    {
      spinState: "PRE",
      chosenIdx: null,
    },
    {
      spinState: "PRE",
      chosenIdx: null,
    },
    {
      spinState: "PRE",
      chosenIdx: null,
    },
    {
      spinState: "PRE",
      chosenIdx: null,
    },
  ]);

  const combinedSpinState = getCombinedSpinState(allReelsState);

  useEffect(() => {
    if (
      !displayIsActive &&
      (combinedSpinState === "POST" || challengeText !== "")
    ) {
      setDisplayIsActive(true);
    } else if (combinedSpinState === "IDLE_START" && displayIsActive) {
      if (challengeText !== "") setChallengeText("");
      setDisplayIsActive(false);
    }
  }, [combinedSpinState, challengeText, displayIsActive]);

  function setAllSpinStates(newSpinState: SpinState) {
    setAllReelsState((prevState) => {
      const newAllReelsState = prevState.map((reelState, idx) => {
        return {
          ...reelState,
          spinState: newSpinState,
          chosenIdx: chosenIdxs[idx],
        } as ReelState;
      });
      return newAllReelsState as AllReelsState;
    });
  }

  function setSpinState(reelIdx: ReelIdx, spinState: SpinState) {
    setAllReelsState((prevState) => {
      const newAllReelsState = [...prevState];
      newAllReelsState[reelIdx].spinState = spinState;
      return newAllReelsState as AllReelsState;
    });
  }

  function cycleAllSpinStates() {
    setAllReelsState((prevState) => {
      const newAllReelsState = prevState.map((reelState, idx) => {
        return {
          ...reelState,
          spinState: getNextSpinState(reelState.spinState),
          chosenIdx: chosenIdxs[idx],
        } as ReelState;
      });
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
    if (combinedSpinState !== "PRE") return;

    getRandChoices();
    setAllSpinStates("IDLE_START");
    setChallengeState("CREATING");
  }

  useEffect(() => {
    // Temp for logging spinState
    console.log("combinedSpinState", combinedSpinState);
  }, [combinedSpinState]);

  function onClickSpinLight(reelIdx: ReelIdx, spinState: SpinState) {
    if (spinState !== "IDLE_LOOP") return;
    setSpinState(reelIdx, "STOPPING");
  }

  const displayText =
    "Cloud Challenge: Stocks using Amazon DynamoDB in 120 minutes";

  function onClickTestBtn() {
    if (!combinedSpinState) {
      return;
    } else if (combinedSpinState === "IDLE_LOOP") {
      getRandChoices();
      setRandChoices();
    } else {
      cycleAllSpinStates();
    }
  }

  function onDisplayStartTyping() {
    setChallengeText(displayText);
  }

  function onDisplayCompleteTyping() {
    setAllSpinStates("PRE");
  }

  return (
    <div className="App">
      <GameContainer>
        <button className="test-btn" onClick={onClickTestBtn}>
          {combinedSpinState || "Mixed"}
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
                setSpinState={(spinState: SpinState) =>
                  setSpinState(idx, spinState)
                }
                onClickSpinLight={(spinState: SpinState) =>
                  onClickSpinLight(idx, spinState)
                }
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
            text={displayText}
            onCompleteTyping={onDisplayCompleteTyping}
            onStartTyping={onDisplayStartTyping}
          />
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
