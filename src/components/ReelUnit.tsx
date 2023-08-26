import { useRef, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import LockSwitch from "./LockSwitch";
import "./ReelUnit.css";
import Sign from "./Sign";
import Reel from "./Reel";
import SpinLight from "./SpinLight";
import { Choice, SpinState } from "../types";

interface Props {
  name: string;
  key: string;
  spinState: SpinState;
  choices: Choice[];
  chosenIdx: number | null;
}

const ReelUnit: React.FC<Props> = ({ name, spinState, choices, chosenIdx }) => {
  const [isLocked, setIsLocked] = useState(false);
  const userLockedRef = useRef(isLocked);
  const dispatch = useAppDispatch();

  // Only update reel's isUserLocked state when reel is not spinning
  if (
    userLockedRef.current !== isLocked &&
    (spinState === "PRE" || spinState === "POST")
  ) {
    userLockedRef.current = isLocked;
  }

  const setSpinState = (spinState: SpinState) => {
    dispatch({
      type: "reels/spinStateUpdated",
      payload: {
        name,
        spinState,
      },
    });
  };

  const onClickSpinLight = (spinState: SpinState) => {
    if (spinState !== "IDLE_LOOP") return;
    setSpinState("STOPPING");
  };

  return (
    <div className="reel-unit">
      <Sign name={name} />
      <LockSwitch isLocked={isLocked} setIsLocked={setIsLocked} />
      <Reel
        choices={choices}
        chosenIdx={chosenIdx}
        spinState={spinState}
        setSpinState={setSpinState}
        isUserLocked={userLockedRef.current}
      />
      <SpinLight spinState={spinState} onClickSpinLight={onClickSpinLight} />
    </div>
  );
};

export default ReelUnit;
