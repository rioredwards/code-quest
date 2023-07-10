import "./Reel.css";
import { motion, useAnimate, useMotionValue } from "framer-motion";
import Choice from "./Choice";
import { SpinState } from "../App";
import { useEffect } from "react";
import { numToVh, repeatArray, vhToNum } from "../utils/genUtils";

const CHOICE_HEIGHT = 3.32; // vh
const NUM_CHOICES_VISIBLE = 5;
const BASE_SPIN_SPEED = 8; // choices per second

interface ReelProps {
  choices: string[];
  spinState: SpinState;
  chosenIdx: number;
  isDraggable: boolean;
}

const Reel: React.FC<ReelProps> = ({
  choices,
  spinState,
  chosenIdx,
  isDraggable,
}) => {
  const repeatedChoices = repeatArray(choices, 5); // Needed for infinite scrolling behavior
  const [scope, animate] = useAnimate();
  const y = useMotionValue("0vh");

  useEffect(() => {
    const preSpinAnimation = async () => {
      const startingChoiceIdx = chosenIdx ?? 0;
      const startYInFirstReelCopy = translateChoiceIdxToY(startingChoiceIdx);
      const startY = translateYDownByReelCopy(
        startYInFirstReelCopy,
        choices.length,
        1
      );
      animate(scope.current, { y: numToVh(startY) }, { duration: 0 });
    };

    const idleAnimation = async () => {
      const newY = translateYDownByReelCopy(
        vhToNum(y.get()),
        choices.length,
        1
      );
      const spinDuration = getIdleSpinDuration(choices.length);
      animate(
        scope.current,
        { y: [null, numToVh(newY)] },
        { duration: spinDuration, ease: "linear", repeat: Infinity }
      );
    };

    const stoppingAnimation = async () => {
      const targetYInFirstReelCopy = translateChoiceIdxToY(chosenIdx);
      const targetY = translateYDownByReelCopy(
        targetYInFirstReelCopy,
        choices.length,
        3
      );
      animate(
        scope.current,
        { y: [null, numToVh(targetY)] },
        {
          type: "spring",
          damping: 4,
          stiffness: 3.8,
          mass: 3.5,
          velocity: 80,
          restSpeed: 0.2,
        }
      );
    };

    const postSpinAnimation = async () => {
      const targetYInFirstReelCopy = translateChoiceIdxToY(chosenIdx);
      const targetY = translateYDownByReelCopy(
        targetYInFirstReelCopy,
        choices.length,
        1
      );
      animate(scope.current, { y: numToVh(targetY) }, { duration: 0 });
    };

    const animateSequence = async () => {
      if (spinState === SpinState.IDLE) await idleAnimation();
      if (spinState === SpinState.STOPPING) await stoppingAnimation();
      if (spinState === SpinState.POST) await postSpinAnimation();
      if (spinState === SpinState.PRE) await preSpinAnimation();
    };

    animateSequence();
  }, [spinState, chosenIdx]);

  return (
    <div className="reel-container">
      <div className="reel-window" />
      <motion.ul className="reel" style={{ y }} ref={scope}>
        {repeatedChoices.map((choice, i) => (
          <Choice
            key={i}
            classes={getChoiceClassName(
              i,
              chosenIdx,
              choices.length,
              spinState
            )}
            displayName={choice}></Choice>
        ))}
      </motion.ul>
    </div>
  );
};

function translateYDownByReelCopy(
  currY: number,
  choicesLength: number,
  copyIdx: number
): number {
  return currY - CHOICE_HEIGHT * (choicesLength * copyIdx);
}

function getIdleSpinDuration(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED;
}

function translateChoiceIdxToY(idx: number): number {
  const idxShiftedToMiddleOfWindow = idx - Math.floor(NUM_CHOICES_VISIBLE / 2);
  return -idxShiftedToMiddleOfWindow * CHOICE_HEIGHT;
}

function getChoiceClassName(
  i: number,
  choiceIdx: number,
  choicesLength: number,
  spinState: SpinState
): string {
  const base = "choice";
  const chosenClass =
    spinState !== SpinState.POST
      ? ""
      : i === choiceIdx + choicesLength
      ? "choiceVarChosen"
      : "";
  const altClass = i % 2 === 0 ? "choiceVar1" : "choiceVar2";
  const classesStr = `${base} ${altClass} ${chosenClass}`;

  return classesStr;
}

export default Reel;
