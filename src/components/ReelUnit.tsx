import { useAppDispatch, useAppSelector } from "../store/hooks";
import LockSwitch from "./LockSwitch";
import "./ReelUnit.css";
import Sign from "./Sign";
import Reel from "./Reel";
import SpinLight from "./SpinLight";
import { ReelName } from "../types";
import { allChoices } from "../data/allChoices";
import { selectReelByName } from "../store/reels/reelsSlice";
import { useRef } from "react";
import HelpTarget from "./HelpTarget";

interface Props {
  name: ReelName;
}

const ReelUnit: React.FC<Props> = ({ name }) => {
  const reel = useAppSelector((state) => selectReelByName(state, name));
  const { spinState, chosenIdx, isSpinLocked, isUserLocked } = reel;
  const choiceIdxAtCurrYPos = useRef<null | number>(null);
  const choices = allChoices[name];
  const dispatch = useAppDispatch();

  const toggleIsUserLocked = () => {
    dispatch({
      type: "reels/lockSwitchToggled",
      payload: { name, choiceIdxAtCurrYPos: choiceIdxAtCurrYPos.current },
    });
  };

  const onFinishedIdleStart = () => {
    dispatch({
      type: "reels/finishedIdleStart",
      payload: name,
    });
  };

  const onFinishedStopping = () => {
    dispatch({
      type: "reels/finishedStopping",
      payload: name,
    });
  };

  const onClickSpinLight = () => {
    dispatch({ type: "tutorial/targetElActivated" });
    dispatch({
      type: "reels/spinLightClicked",
      payload: name,
    });
  };

  return (
    <div className="reel-unit">
      <Sign name={name} />
      <LockSwitch isLocked={isUserLocked} toggleLock={toggleIsUserLocked} />
      <Reel
        choices={choices}
        chosenIdx={chosenIdx}
        spinState={spinState}
        onFinishedIdleStart={onFinishedIdleStart}
        onFinishedStopping={onFinishedStopping}
        isLocked={isSpinLocked || isUserLocked}
        choiceIdxAtCurrYPos={choiceIdxAtCurrYPos}
      />
      <HelpTarget childName="SPIN_BTN">
        <SpinLight spinState={spinState} onClickSpinLight={onClickSpinLight} />
      </HelpTarget>
    </div>
  );
};

export default ReelUnit;
