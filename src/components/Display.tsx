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
import { selectHelpTargetEl } from "../store/help/helpSlice";

interface Props {}

const Display: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const userIsHovering = useRef(false);
  const highlightedForHelp = useAppSelector(selectHelpTargetEl) === "DISPLAY";

  const { isOn, text, copied } = useAppSelector(selectDisplay);
  const chosenChoices = useAppSelector(selectReelChosenChoices);
  const spins = useAppSelector(selectReelsSpinStates);

  const newChallengeText = formatDisplayText(chosenChoices);
  const prevChallengeText = useRef<string | null>(null);

  useEffect(() => {
    if (
      spins.every((spin) => spin === "PRE" || spin === "POST") &&
      ((!isOn && newChallengeText !== null) ||
        (isOn && newChallengeText !== prevChallengeText.current))
    ) {
      // Challenge created or updated
      dispatch({
        type: "display/startDisplay",
        payload: newChallengeText,
      });
      prevChallengeText.current = newChallengeText;
    } else {
      // Do nothing
    }
  }, [spins, newChallengeText, isOn, prevChallengeText, dispatch]);

  const onCompleteTyping = () => {
    dispatch({
      type: "reels/finishedPrintingChallenge",
    });
  };

  const onHoverStart = () => {
    dispatch({
      type: "help/startHoveringOverHelpTarget",
      payload: "DISPLAY",
    });
    userIsHovering.current = true;
  };

  const onHoverEnd = () => {
    dispatch({
      type: "help/stopHoveringOverHelpTarget",
    });
    userIsHovering.current = false;
  };

  const copyToClipboard = () => {
    if (!text) return;
    dispatch({ type: "display/copied" });
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={copyToClipboard}
      className={`display-container ${!isOn ? "" : copied ? "" : "copyable"}`}>
      <div
        className={`display-glass ${highlightedForHelp ? "help-hover" : ""}`}
      />
      {isOn && (
        <motion.div animate={linesAnimation} className="display-lines" />
      )}
      <AnimatePresence>
        {isOn && (userIsHovering.current || copied) && <CopyIcon />}
      </AnimatePresence>
      {isOn && text !== null && (
        <TypingSimulation text={text} onCompleteTyping={onCompleteTyping} />
      )}
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
