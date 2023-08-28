import "./Display.css";
import { motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ReelIdx, ReelsState } from "../store/reels/reelsSlice";
import { typeChoices } from "../data/choices/typeChoices";
import { taskChoices } from "../data/choices/taskChoices";
import { techChoices } from "../data/choices/techChoices";
import { timeChoices } from "../data/choices/timeChoices";
import { SpinState } from "../types";
import { useEffect } from "react";

interface Props {}

const Display: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const isOn = useAppSelector((state) => state.display.isOn);
  const text = useAppSelector((state) => state.display.text);

  const combinedSpinState = useAppSelector(({ reels }) =>
    getCombinedSpinState(reels)
  );

  const typeIdx = useAppSelector(({ reels }) => reels[ReelIdx.TYPE].chosenIdx);
  const taskIdx = useAppSelector(({ reels }) => reels[ReelIdx.TASK].chosenIdx);
  const techIdx = useAppSelector(({ reels }) => reels[ReelIdx.TECH].chosenIdx);
  const timeIdx = useAppSelector(({ reels }) => reels[ReelIdx.TIME].chosenIdx);

  const type = typeIdx !== null ? typeChoices[typeIdx].sentenceName : "";
  const task = taskIdx !== null ? taskChoices[taskIdx].sentenceName : "";
  const tech = techIdx !== null ? techChoices[techIdx].sentenceName : "";
  const time = timeIdx !== null ? timeChoices[timeIdx].sentenceName : "";

  const displayText = `${type} Challenge: ${task} using ${tech} in ${time}!`;

  useEffect(() => {
    if (!isOn && combinedSpinState === "POST") {
      dispatch({
        type: "display/startDisplay",
        payload: displayText,
      });
    }
  }, [isOn, combinedSpinState, dispatch, displayText]);

  const onCompleteTyping = () => {
    dispatch({
      type: "reels/displayAnimationFinished",
    });
  };

  return (
    <div className="display-container">
      <div className="display-glass" />
      {isOn && (
        <>
          <motion.div animate={linesAnimation} className="display-lines" />
          <TypingSimulation text={text} onCompleteTyping={onCompleteTyping} />
        </>
      )}
    </div>
  );
};

function getCombinedSpinState(allReelsState: ReelsState): SpinState | null {
  const firstSpinState = allReelsState[0].spinState;
  const allSpinStatesAreEqual = allReelsState.every(
    (reelState) => reelState.spinState === firstSpinState
  );
  return allSpinStatesAreEqual ? firstSpinState : null;
}

export default Display;
