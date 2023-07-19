import { useState } from "react";
import { Choice, ReelIdx, SpinState } from "../types";
import LockSwitch from "./LockSwitch";
import "./ReelUnit.css";
import Sign from "./Sign";
import Reel from "./Reel";
import SpinLight from "./SpinLight";

interface Props {
  name: string;
  key: string;
  spinState: SpinState;
  cycleSpinState: () => void;
  choices: Choice[];
  chosenIdx: number | null;
  setUserIsDragging: (isDragging: boolean) => void;
  getRandChoices: () => void;
}

const ReelUnit: React.FC<Props> = ({
  name,
  spinState,
  cycleSpinState,
  choices,
  chosenIdx,
  setUserIsDragging,
  getRandChoices,
}) => {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className="reel-unit">
      <Sign name={name} />
      <LockSwitch isLocked={isLocked} setIsLocked={setIsLocked} />
      <Reel
        choices={choices}
        chosenIdx={chosenIdx}
        spinState={spinState}
        cycleSpinState={cycleSpinState}
        isUserLocked={isLocked}
        setUserIsDragging={setUserIsDragging}
      />
      <SpinLight
        spinState={spinState}
        cycleSpinState={cycleSpinState}
        getRandChoices={getRandChoices}
      />
    </div>
  );
};

export default ReelUnit;
