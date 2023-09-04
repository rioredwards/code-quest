import "./Display.css";
import { AnimatePresence, motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ReelIdx, ReelsState } from "../store/reels/reelsSlice";
import { typeChoices } from "../data/choices/typeChoices";
import { taskChoices } from "../data/choices/taskChoices";
import { techChoices } from "../data/choices/techChoices";
import { timeChoices } from "../data/choices/timeChoices";
import { useEffect, useRef } from "react";
import CopyIcon from "./CopyButton";
import { SpinState } from "../types";

interface Props {}

const Display: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const { mode, text, userHovering, copied } = useAppSelector(
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

  const newChallengeText = formatDisplayText(type, task, tech, time);
  const prevChallengeText = useRef<string | null>(null);
  const combinedSpinState = getCombinedSpinState(
    useAppSelector((state) => state.reels)
  );

  useEffect(() => {
    if (
      combinedSpinState === "POST" ||
      (mode === "challenge" && newChallengeText !== prevChallengeText.current)
    ) {
      // Challenge created
      dispatch({
        type: "display/challengeCreated",
        payload: newChallengeText,
      });
      prevChallengeText.current = newChallengeText;
    }
  }, [combinedSpinState, newChallengeText, mode, prevChallengeText, dispatch]);

  const onCompleteTyping = () => {
    if (mode !== "challenge") return;
    dispatch({
      type: "reels/finishedPrintingChallenge",
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
      className={`display-container ${
        mode === "challenge" && !copied ? "copyable" : ""
      }`}>
      <div className="display-glass" />
      <motion.div animate={linesAnimation} className="display-lines" />
      <AnimatePresence>
        {mode === "challenge" && (userHovering || copied) && <CopyIcon />}
      </AnimatePresence>
      <TypingSimulation text={text} onCompleteTyping={onCompleteTyping} />
    </motion.div>
  );
};

function getCombinedSpinState(reels: ReelsState): SpinState | "MIXED" {
  const referenceSpinState = reels[0].spinState;
  const allReelsHaveSameSpinState = reels.every(
    (reel) => reel.spinState === referenceSpinState
  );
  if (allReelsHaveSameSpinState) return referenceSpinState;
  return "MIXED";
}

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
