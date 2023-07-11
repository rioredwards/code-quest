import "./Reel.css";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Choice from "./Choice";
import { SpinState } from "../App";
import { useEffect, useState } from "react";
import { numToVh, repeatArray, vhToNum } from "../utils/genUtils";
import {
  BASE_SPIN_SPEED,
  CHOICE_HEIGHT_VH,
  NUM_CHOICES_VISIBLE,
} from "../motionConfigs/reelMotion";
import Window from "./Window";
import { convertPXtoVH, convertVHtoPX } from "../utils/DOMUtils";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

interface ReelProps {
  choices: string[];
  spinState: SpinState;
  chosenIdx: number | null;
  isDraggable: boolean;
  setUserDragging: (isDragging: boolean) => void;
}

let upperDragConstraint: number | undefined;
let lowerDragConstraint: number | undefined;

const Reel: React.FC<ReelProps> = ({
  choices,
  spinState,
  chosenIdx,
  isDraggable,
  setUserDragging,
}) => {
  const repeatedChoices = repeatArray(choices, 5); // Needed for infinite scrolling behavior
  const [scope, animate] = useAnimate();
  const reelEl = scope.current;
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [reelHeightPx, setReelHeightPx] = useState<number | undefined>(
    undefined
  );
  const autoSpinY = useMotionValue(0);
  const dragSpinY = useMotionValue(0);
  const totalY = useTransform(
    [autoSpinY, dragSpinY],
    calcTotalYFromDragAndAutoSpin
  );
  const windowHeightPx = useWindowDimensions().height;

  useEffect(() => {
    if (dragging || !reelEl || !reelHeightPx) return;
    async function preSpinAnimation() {
      const startY = translateYDownChoicesCopy2(totalY.get(), reelHeightPx!, 1);
      animate(reelEl, { y: startY }, { duration: 0 });
    }

    async function idleAnimationStart() {
      const upperY = totalY.get();
      const lowerY = translateYDownChoicesCopy(totalY.get(), choices.length, 1);
      const spinDur = getIdleSpinDur(choices.length) + 1;
      animate([
        [
          reelEl,
          { y: [null, lowerY] },
          {
            duration: spinDur,
            ease: "easeIn",
          },
        ],
        [
          reelEl,
          { y: upperY },
          {
            duration: 0,
          },
        ],
      ]).then(idleAnimationLoop);
    }

    async function idleAnimationLoop() {
      const lowerY = translateYDownChoicesCopy(totalY.get(), choices.length, 1);
      const spinDur = getIdleSpinDur(choices.length);
      animate(
        reelEl,
        { y: [null, lowerY] },
        { duration: spinDur, ease: "linear", repeat: Infinity }
      );
    }

    async function stoppingAnimation() {
      if (!chosenIdx) throw new Error("chosenIdx is null");
      const targetYInFirstReelCopy = translateChoiceIdxToY(chosenIdx);
      const targetY = translateYDownChoicesCopy(
        targetYInFirstReelCopy,
        choices.length,
        3
      );
      animate(
        reelEl,
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
    }

    async function postSpinAnimation() {
      if (!chosenIdx) throw new Error("chosenIdx is null");
      const targetYInFirstReelCopy = translateChoiceIdxToY(chosenIdx);
      const targetY = translateYDownChoicesCopy(
        targetYInFirstReelCopy,
        choices.length,
        1
      );
      animate(scope.current, { y: targetY }, { duration: 0 });
    }

    const animateSequence = async () => {
      if (spinState === SpinState.IDLE) await idleAnimationStart();
      if (spinState === SpinState.STOPPING) await stoppingAnimation();
      if (spinState === SpinState.POST) await postSpinAnimation();
      if (spinState === SpinState.PRE) await preSpinAnimation();
    };

    animateSequence();
  }, [spinState, chosenIdx, dragging]);

  useEffect(() => {
    if (!isDraggable || !windowHeightPx) return;
    setReelHeightPx(getReelHeightPx(choices.length, windowHeightPx));
    upperDragConstraint = getUpperDragConstraint(
      choices.length,
      windowHeightPx
    );
    lowerDragConstraint = getLowerDragConstraint(
      choices.length,
      windowHeightPx
    );
  }, [isDraggable, windowHeightPx, choices.length]);

  return (
    <div className="reel-container">
      <div className="reel-gradient" />
      <AnimatePresence>{!isDraggable && <Window />}</AnimatePresence>
      <motion.ul className="reel" style={{ y: totalY }} ref={scope}>
        {repeatedChoices.map((choice, i) => (
          <Choice
            key={i}
            classes={getChoiceClassName(
              i,
              chosenIdx &&
                translateChosenIdxDownByReelCopy(chosenIdx, choices.length, 1)
            )}
            displayName={choice}></Choice>
        ))}
      </motion.ul>
    </div>
  );
};

function translateYToChoicesCopyIdx(
  currY: number,
  reelHeightInPx: number,
  copyIdx: number
) {
  return currY - reelHeightInPx * copyIdx;
}

function translateYDownChoicesCopy2(
  y: number,
  reelHeightInPx: number,
  copyIdx: number
): number {
  return y - reelHeightInPx * copyIdx;
}

function translateYDownChoicesCopy(
  y: number,
  choicesLength: number,
  copyIdx: number
): number {
  return y - CHOICE_HEIGHT_VH * (choicesLength * copyIdx);
}

function calcTotalYFromDragAndAutoSpin([dragY, autoSpinY]: number[]): number {
  console.log(dragY, autoSpinY);
  return dragY + autoSpinY;
}

function getReelHeightPx(
  choicesLength: number,
  windowHeightPx: number
): number {
  const reelHeightInVh = CHOICE_HEIGHT_VH * choicesLength;
  const reelHeightPx = convertVHtoPX(reelHeightInVh, windowHeightPx);
  return reelHeightPx;
}

function roundYToNearestChoice(y: number): number {
  return Math.round(y / CHOICE_HEIGHT_VH) * CHOICE_HEIGHT_VH;
}

function yIsOutsideDragBounds(
  y: number,
  choicesLength: number
): "over" | "under" | null {
  const threshold = CHOICE_HEIGHT_VH * 0.5;
  const upperBound = translateChoiceIdxToY(0);
  const translatedUpper = translateYDownChoicesCopy(
    upperBound,
    choicesLength,
    1
  );

  const lowerBound = translateChoiceIdxToY(choicesLength - 1);
  const translatedLower = translateYDownChoicesCopy(
    lowerBound,
    choicesLength,
    1
  );

  const isOver = y > translatedUpper + threshold;
  const isUnder = y < translatedLower - threshold;

  return isOver ? "over" : isUnder ? "under" : null;
}

function getUpperDragConstraint(
  choicesLength: number,
  windowHeightPx: number
): number {
  const upperBound = translateChoiceIdxToY(0);
  const translatedUpper = translateYDownChoicesCopy(
    upperBound,
    choicesLength,
    1
  );
  return convertVHtoPX(translatedUpper, windowHeightPx);
}

function getLowerDragConstraint(
  choicesLength: number,
  windowHeightPx: number
): number {
  const lowerBound = translateChoiceIdxToY(choicesLength - 1);
  const translatedLower = translateYDownChoicesCopy(
    lowerBound,
    choicesLength,
    1
  );
  return convertVHtoPX(translatedLower, windowHeightPx);
}

function translateChosenIdxDownByReelCopy(
  chosenIdx: number,
  choicesLength: number,
  copyIdx: number
): number {
  return chosenIdx + choicesLength * copyIdx;
}

function getIdleSpinDur(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED;
}

function translateChoiceIdxToY(idx: number): number {
  const idxShiftedToMiddleOfWindow = idx - Math.floor(NUM_CHOICES_VISIBLE / 2);
  return -idxShiftedToMiddleOfWindow * CHOICE_HEIGHT_VH;
}

function getChoiceClassName(
  i: number,
  translatedChosenIdx: number | null
): string {
  const base = "choice";
  let chosenClass = "";
  if (translatedChosenIdx !== null && i === translatedChosenIdx)
    chosenClass = "choiceVarChosen";
  const altClass = i % 2 === 0 ? "choiceVar1" : "choiceVar2";
  const classesStr = `${base} ${altClass} ${chosenClass}`;

  return classesStr;
}

export default Reel;
