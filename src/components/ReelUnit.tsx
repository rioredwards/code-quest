import { useRef, useState } from "react";
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
  setSpinState: (spinState: SpinState) => void;
  choices: Choice[];
  chosenIdx: number | null;
  onClickSpinLight: (spinState: SpinState) => void;
}

const ReelUnit: React.FC<Props> = ({
  name,
  spinState,
  setSpinState,
  choices,
  chosenIdx,
  onClickSpinLight,
}) => {
  const [isLocked, setIsLocked] = useState(false);
  const lockedRef = useRef(isLocked);

  // Only update reel's isLocked state when reel is not spinning
  if (spinState === SpinState.PRE) {
    lockedRef.current = isLocked;
  }

  return (
    <div className="reel-unit">
      <Sign name={name} />
      <LockSwitch isLocked={isLocked} setIsLocked={setIsLocked} />
      <Reel
        choices={choices}
        chosenIdx={chosenIdx}
        spinState={spinState}
        setSpinState={setSpinState}
        isUserLocked={lockedRef.current}
      />
      <SpinLight spinState={spinState} onClickSpinLight={onClickSpinLight} />
    </div>
  );
};

export default ReelUnit;
