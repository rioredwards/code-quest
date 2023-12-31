import { useAppDispatch, useAppSelector } from '../store/hooks';
import LockSwitch from './LockSwitch';
import './ReelUnit.css';
import Reel from './Reel';
import { ReelName } from '../types';
import { allChoices } from '../data/allChoices';
import { selectReelByName } from '../store/reels/reelsSlice';
import { useRef } from 'react';
import StopButton from './StopButton';

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
      type: 'reels/lockSwitchToggled',
      payload: { name, choiceIdxAtCurrYPos: choiceIdxAtCurrYPos.current },
    });
  };

  const onFinishedIdleStart = () => {
    dispatch({
      type: 'reels/finishedIdleStart',
      payload: name,
    });
  };

  const onFinishedStopping = () => {
    dispatch({
      type: 'reels/finishedStopping',
      payload: name,
    });
  };

  const onClickStopButton = () => {
    dispatch({ type: 'tutorial/targetElActivated' });
    dispatch({
      type: 'reels/stopButtonClicked',
      payload: name,
    });
  };

  return (
    <div className="reel-unit">
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
      <StopButton spinState={spinState} onClickStopButton={onClickStopButton} />
    </div>
  );
};

export default ReelUnit;
