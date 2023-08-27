import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import LockSwitch from "./LockSwitch";
import "./ReelUnit.css";
import Sign from "./Sign";
import Reel from "./Reel";
import SpinLight from "./SpinLight";
import { ReelName, SpinState } from "../types";
import { allChoices } from "../data/allChoices";

interface Props {
  name: ReelName;
  key: string;
  spinState: SpinState;
}

const ReelUnit: React.FC<Props> = ({ name, spinState }) => {
  const [isLocked, setIsLocked] = useState(false);
  const reelIdx = useAppSelector((state) =>
    state.reels.findIndex((reel) => reel.name === name)
  );
  const choices = allChoices[name];
  const chosenIdx = useAppSelector((state) => state.reels[reelIdx].chosenIdx);
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
