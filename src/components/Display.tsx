import "./Display.css";
import { AnimatePresence, motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectReelChosenChoices,
  selectReelsSpinStates,
} from "../store/reels/reelsSlice";
import { useEffect, useRef } from "react";
import CopyIcon from "./CopyButton";
import { selectDisplay } from "../store/display/displaySlice";

interface Props {}

const Display: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const { mode, text, userHovering, copied } = useAppSelector(selectDisplay);
  const chosenChoices = useAppSelector(selectReelChosenChoices);
  const spins = useAppSelector(selectReelsSpinStates);

  const newChallengeText = formatDisplayText(chosenChoices);
  const prevChallengeText = useRef<string | null>(null);

  useEffect(() => {
    if (spins.includes("IDLE_START") || spins.includes("IDLE_LOOP")) {
      // Any reels are spinning
      dispatch({ type: "display/reelsSpinning" });
    } else if (spins.includes("STOPPING")) {
      // No reels are spinning, but some are stopping
      dispatch({ type: "display/reelsStopping" });
    } else if (
      spins.every((spin) => spin === "POST") ||
      (mode === "challenge" && newChallengeText !== prevChallengeText.current)
    ) {
      // Challenge created or updated
      dispatch({
        type: "display/challengeCreated",
        payload: newChallengeText,
      });
      prevChallengeText.current = newChallengeText;
    } else {
      // Do nothing
    }
  }, [spins, newChallengeText, mode, prevChallengeText, dispatch]);

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

function formatDisplayText(
  chosenChoices: ReturnType<typeof selectReelChosenChoices>
): string | null {
  const { chosenType, chosenTask, chosenTech, chosenTime } = chosenChoices;
  if (!chosenType || !chosenTask || !chosenTech || !chosenTime) return null;
  return `${chosenType} Challenge: ${chosenTask} using ${chosenTech} in ${chosenTime}!`;
}

export default Display;
