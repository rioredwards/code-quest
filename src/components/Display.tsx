import "./Display.css";
import { AnimatePresence, motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ReelIdx } from "../store/reels/reelsSlice";
import { typeChoices } from "../data/choices/typeChoices";
import { taskChoices } from "../data/choices/taskChoices";
import { techChoices } from "../data/choices/techChoices";
import { timeChoices } from "../data/choices/timeChoices";
import { useEffect } from "react";
import CopyIcon from "./CopyButton";

interface Props {}

const displayVariants = {
  off: {
    filter: "brightness(80%)",
  },
  onNotHovering: {
    filter: "brightness(110%)",
  },
  onHovering: {
    filter: "brightness(120%)",
  },
};

const Display: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const { isOn, text, userHovering, copied } = useAppSelector(
    (state) => state.display
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
  const needToUpdate = newDisplayText && newDisplayText !== text;
  const allReelsAreStopped = useAppSelector(({ reels }) =>
    reels.every((reel) => reel.spinState === "PRE" || reel.spinState === "POST")
  );

  useEffect(() => {
    if (!isOn && newDisplayText && allReelsAreStopped) {
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
  }, [isOn, dispatch, newDisplayText, text, needToUpdate, allReelsAreStopped]);

  const onCompleteTyping = () => {
    dispatch({
      type: "reels/displayAnimationFinished",
    });
  };

  const onHoverStart = () => {
    dispatch({
      type: "display/userHovering",
    });
  };

  const onHoverEnd = () => {
    dispatch({
      type: "display/userNotHovering",
    });
  };

  const copyToClipboard = () => {
    dispatch({ type: "display/copied" });
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={copyToClipboard}
      variants={displayVariants}
      animate={!isOn ? "off" : !userHovering ? "onNotHovering" : "onHovering"}
      className={`display-container ${
        isOn ? (copied ? "copied" : "notCopied") : "off"
      }`}>
      <div className="display-glass" />
      {isOn && (
        <motion.div animate={linesAnimation} className="display-lines" />
      )}
      <AnimatePresence>
        {isOn && (userHovering || copied) && <CopyIcon />}
      </AnimatePresence>
      {isOn && !needToUpdate && (
        <TypingSimulation text={text} onCompleteTyping={onCompleteTyping} />
      )}
    </motion.div>
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
