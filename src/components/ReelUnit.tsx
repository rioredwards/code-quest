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
  const reelIdx = useAppSelector((state) =>
    state.reels.findIndex((reel) => reel.name === name)
  );
  const choices = allChoices[name];
  const chosenIdx = useAppSelector((state) => state.reels[reelIdx].chosenIdx);
  const isSpinLocked = useAppSelector(
    (state) => state.reels[reelIdx].isSpinLocked
  );
  const isUserLocked = useAppSelector(
    (state) => state.reels[reelIdx].isUserLocked
  );
  const isLocked = isSpinLocked || isUserLocked;
  const dispatch = useAppDispatch();

  // Only update reel's isUserLocked state when reel is not spinning
  const toggleIsUserLocked = () => {
    dispatch({
      type: "reels/lockSwitchToggled",
      payload: name,
    });
  };

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
      <LockSwitch isLocked={isLocked} toggleLock={toggleIsUserLocked} />
      <Reel
        choices={choices}
        chosenIdx={chosenIdx}
        spinState={spinState}
        setSpinState={setSpinState}
        isLocked={isLocked}
      />
      <SpinLight spinState={spinState} onClickSpinLight={onClickSpinLight} />
    </div>
  );
};

export default ReelUnit;
