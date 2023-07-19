import { useState } from "react";
import { Choice, SpinState } from "../types";
import LockSwitch from "./LockSwitch";
import "./ReelUnit.css";
import Sign from "./Sign";

interface Props {
  name: string;
  key: string;
  spinState: SpinState;
  choices: Choice[];
  chosenIdx: number | null;
}

const ReelUnit: React.FC<Props> = ({ name, spinState, choices, chosenIdx }) => {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className="reel-unit">
      <Sign name={name} />
      <LockSwitch isLocked={isLocked} setIsLocked={setIsLocked} />
    </div>
  );
};

export default ReelUnit;
