import "./Reel.css";
import { motion, useAnimate, useMotionValue } from "framer-motion";
import Choice from "./Choice";
import { SpinState } from "../App";
import { useEffect } from "react";
import { numToVh, repeatArray, vhToNum } from "../utils/genUtils";

// useCycle: https://www.youtube.com/watch?v=wAwJj-KGb38&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=17&ab_channel=TheNetNinja

const CHOICE_HEIGHT = 3.32; // vh
const NUM_CHOICES_VISIBLE = 5;
const IDLE_SPIN_SPEED = 8; // choices per second

interface ReelProps {
  choices: string[];
  spinState: SpinState;
  chosenIdx: number;
  isDraggable: boolean;
}

const Reel: React.FC<ReelProps> = ({ choices, spinState, chosenIdx }) => {
  const repeatedChoices = repeatArray(choices, 3);
  const [scope, animate] = useAnimate();
  const y = useMotionValue("0vh");

  useEffect(() => {
    const idleAnimation = async () => {
      const newY = translateYDownFullReel(vhToNum(y.get()), choices.length);
      const spinDuration = getIdleSpinDuration(choices.length);
      animate(
        scope.current,
        { y: [numToVh(0), numToVh(newY)] },
        { duration: spinDuration, ease: "linear", repeat: Infinity }
      );
    };

    const stoppingAnimation = async () => {
      const currentY = vhToNum(y.get());
      const targetY = translateChoiceIdxToY(chosenIdx, choices.length);
      const spinDuration = getStoppingSpinDuration(currentY, targetY);
      animate(
        scope.current,
        { y: [numToVh(currentY), numToVh(targetY)] },
        { duration: spinDuration, ease: "linear" }
      );
    };

    const animateSequence = async () => {
      if (spinState === SpinState.IDLE) await idleAnimation();
      if (spinState === SpinState.STOPPING) await stoppingAnimation();
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
            classes={getChoiceClassName(i, chosenIdx, choices.length)}
            displayName={choice}></Choice>
        ))}
      </motion.ul>
    </div>
  );
};

function translateYDownFullReel(yNum: number, choicesLength: number): number {
  return yNum - CHOICE_HEIGHT * choicesLength;
}

function getIdleSpinDuration(choicesLength: number): number {
  return choicesLength / IDLE_SPIN_SPEED;
}

function getStoppingSpinDuration(currentY: number, targetY: number): number {
  const yDiff = Math.abs(currentY - targetY);
  const spinDuration = yDiff / IDLE_SPIN_SPEED;
  return spinDuration;
}

function translateChoiceIdxToY(idx: number, choicesLength: number): number {
  const idxShiftedToMiddleOfWindow = idx - Math.floor(NUM_CHOICES_VISIBLE / 2);
  const yShiftForFirstCopyOfArr = -idxShiftedToMiddleOfWindow * CHOICE_HEIGHT;
  const yShiftForSecondCopyOfArr = translateYDownFullReel(
    yShiftForFirstCopyOfArr,
    choicesLength
  );
  return yShiftForSecondCopyOfArr;
}

function getChoiceClassName(
  i: number,
  choiceIdx: number,
  choicesLength: number
): string {
  const base = "choice";
  const chosenClass = i === choiceIdx + choicesLength ? "choiceVarChosen" : "";
  const altClass = i % 2 === 0 ? "choiceVar1" : "choiceVar2";

  return `${base} ${altClass} ${chosenClass}`;
}

export default Reel;
