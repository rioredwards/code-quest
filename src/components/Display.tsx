import "./Display.css";
import { motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ReelIdx, getCombinedSpinState } from "../store/reels/reelsSlice";
import { typeChoices } from "../data/choices/typeChoices";
import { taskChoices } from "../data/choices/taskChoices";
import { techChoices } from "../data/choices/techChoices";
import { timeChoices } from "../data/choices/timeChoices";
import { useEffect } from "react";

interface Props {}

const Display: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const isOn = useAppSelector((state) => state.display.isOn);
  const displayText = useAppSelector((state) => state.display.text);

  const combinedSpinState = useAppSelector(({ reels }) =>
    getCombinedSpinState(reels)
  );

  const typeIdx = useAppSelector(({ reels }) => reels[ReelIdx.TYPE].chosenIdx);
  const taskIdx = useAppSelector(({ reels }) => reels[ReelIdx.TASK].chosenIdx);
  const techIdx = useAppSelector(({ reels }) => reels[ReelIdx.TECH].chosenIdx);
  const timeIdx = useAppSelector(({ reels }) => reels[ReelIdx.TIME].chosenIdx);

  const type = typeIdx !== null ? typeChoices[typeIdx].sentenceName : null;
  const task = taskIdx !== null ? taskChoices[taskIdx].sentenceName : null;
  const tech = techIdx !== null ? techChoices[techIdx].sentenceName : null;
  const time = timeIdx !== null ? timeChoices[timeIdx].sentenceName : null;

  const newDisplayText = formatDisplayText(type, task, tech, time);
  const needToUpdate = newDisplayText && newDisplayText !== displayText;

  useEffect(() => {
    if (!isOn && combinedSpinState === "POST" && newDisplayText) {
      console.log("newDisplayText", newDisplayText);
      dispatch({
        type: "display/startDisplay",
        payload: newDisplayText,
      });
    } else if (isOn && needToUpdate) {
      dispatch({
        type: "display/updateDisplay",
        payload: newDisplayText,
      });
    }
  }, [
    isOn,
    combinedSpinState,
    dispatch,
    newDisplayText,
    displayText,
    needToUpdate,
  ]);

  const onCompleteTyping = () => {
    dispatch({
      type: "reels/displayAnimationFinished",
    });
  };

  return (
    <div className="display-container">
      <div className="display-glass" />
      {isOn && !needToUpdate && (
        <>
          <motion.div animate={linesAnimation} className="display-lines" />
          <TypingSimulation
            text={displayText}
            onCompleteTyping={onCompleteTyping}
          />
        </>
      )}
    </div>
  );
};

function formatDisplayText(
  type: string | null,
  task: string | null,
  tech: string | null,
  time: string | null
): string | null {
  if (!type || !task || !tech || !time) return null;
  return `${type} Challenge: ${task} using ${tech} in ${time}!`;
}

export default Display;
