import "./Reel.css";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
  useVelocity,
} from "framer-motion";
import Choice from "./Choice";
import { SpinState } from "../App";
import { useEffect, useState } from "react";
import { numToVh, repeatArray, vhToNum } from "../utils/genUtils";
import {
  CHOICE_HEIGHT_VH,
  NUM_CHOICES_VISIBLE,
  getIdleSpinLoopDur,
  getIdleSpinStartDur,
  translateYToReelCopyIdx,
} from "../motionConfigs/reelMotion";
import Window from "./Window";

interface ReelProps {
  choices: string[];
  spinState: SpinState;
  chosenIdx: number | null;
  isUserLocked: boolean;
  setUserDragging: (isDragging: boolean) => void;
}

const Reel: React.FC<ReelProps> = ({
  choices,
  spinState,
  chosenIdx,
  setUserDragging,
  isUserLocked,
}) => {
  const repeatedChoices = repeatArray(choices, 5); // Needed for infinite scrolling behavior
  const isSpinLocked = spinState !== SpinState.PRE;
  const [scope, animate] = useAnimate();
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const y = useMotionValue("0vh");
  const yNum = useTransform(y, vhToNum);
  const dragY = useMotionValue(0);
  const yVelocity = useVelocity(yNum);

  useEffect(() => {
    const preSpinAnimation = async () => {
      const currY = vhToNum(y.get());
      const startY = translateYToReelCopyIdx(currY, choices.length, 1);
      animate(scope.current, { y: numToVh(startY) }, { duration: 0 });
    };

    const idleAnimationStart = async () => {
      const currY = vhToNum(y.get());
      const startY = translateYToReelCopyIdx(currY, choices.length, 1);
      const endY = translateYToReelCopyIdx(currY, choices.length, 2);
      const spinDur = getIdleSpinStartDur(choices.length);
      await animate([
        [scope.current, { y: numToVh(startY) }, { duration: 0 }],
        [
          scope.current,
          { y: numToVh(endY) },
          { duration: spinDur, ease: "easeIn" },
        ],
        [scope.current, { y: numToVh(startY) }, { duration: 0 }],
      ]).then(idleAnimationLoop);
    };

    const idleAnimationLoop = async () => {
      const currY = vhToNum(y.get());
      const startY = translateYToReelCopyIdx(currY, choices.length, 1);
      const endY = translateYToReelCopyIdx(currY, choices.length, 2);
      const spinDur = getIdleSpinLoopDur(choices.length);
      animate(
        scope.current,
        { y: [numToVh(startY), numToVh(endY)] },
        { duration: spinDur, ease: "linear", repeat: Infinity }
      );
    };

    const stoppingAnimation = async () => {
      if (chosenIdx === null) throw new Error("chosenIdx is null");
      const currY = vhToNum(y.get());
      const startY = translateYToReelCopyIdx(currY, choices.length, 1);
      const targetYInFirstReelCopy = translateChoiceIdxToY(chosenIdx);
      const targetYInThirdReel = translateYToReelCopyIdx(
        targetYInFirstReelCopy,
        choices.length,
        3
      );
      const targetYInFirstReel = translateYToReelCopyIdx(
        targetYInFirstReelCopy,
        choices.length,
        1
      );
      animate([
        [scope.current, { y: numToVh(startY) }, { duration: 0 }],
        [
          scope.current,
          { y: numToVh(targetYInThirdReel) },
          {
            type: "spring",
            damping: 4,
            stiffness: 3.8,
            mass: 3.5,
            velocity: 80,
            restSpeed: 0.2,
          },
        ],
        [scope.current, { y: numToVh(targetYInFirstReel) }, { duration: 0 }],
      ]);
    };

    const postSpinAnimation = async () => {
      if (chosenIdx === null) throw new Error("chosenIdx is null");
      const targetYInFirstReelCopy = translateChoiceIdxToY(chosenIdx);
      const targetY = translateYToReelCopyIdx(
        targetYInFirstReelCopy,
        choices.length,
        1
      );
      animate(scope.current, { y: numToVh(targetY) }, { duration: 0 });
    };

    const animateSequence = async () => {
      if (spinState === SpinState.IDLE) await idleAnimationStart();
      if (spinState === SpinState.STOPPING) await stoppingAnimation();
      if (spinState === SpinState.POST) await postSpinAnimation();
      if (spinState === SpinState.PRE) await preSpinAnimation();
    };

    animateSequence();
  }, [spinState, chosenIdx]);

  function onHoverStart(): void {
    if (dragging) return;
    animate(scope.current, { filter: "brightness(105%)" });
  }

  function onHoverEnd(): void {
    if (dragging) return;
    animate(scope.current, { filter: "brightness(100%)" });
  }

  function onDragStart(): void {
    if (dragStartY) return;
    animate(scope.current, { filter: "brightness(115%)" });
    setDragging(true);
    setUserDragging(true);
    setDragStartY(vhToNum(y.get()));
  }

  function onDrag(): void {
    if (!dragStartY) return;
    const currDragY = dragY.get();
    const roundedY = roundYToNearestChoice(dragStartY + currDragY);
    if (yIsOutsideDragBounds(roundedY, choices.length)) return;

    animate(
      scope.current,
      { y: numToVh(roundedY) },
      { velocity: yVelocity.getVelocity() }
    );
  }

  function onDragEnd(): void {
    animate(scope.current, { filter: "brightness(100%)" });
    setDragging(false);
    setUserDragging(false);
    setDragStartY(0);
    dragY.set(0);
  }

  return (
    <div className="reel-container">
      <div className="reel-gradient" />
      {!isUserLocked && !isSpinLocked && (
        <motion.div
          className="drag-handle"
          style={{ y: dragY }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragSnapToOrigin={true}
          dragElastic={0.1}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        />
      )}
      <AnimatePresence>
        {(isUserLocked || isSpinLocked) && <Window />}
      </AnimatePresence>
      <motion.ul className="reel" style={{ y }} ref={scope}>
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

function roundYToNearestChoice(y: number): number {
  return Math.round(y / CHOICE_HEIGHT_VH) * CHOICE_HEIGHT_VH;
}

function yIsOutsideDragBounds(
  y: number,
  choicesLength: number
): "over" | "under" | null {
  const threshold = CHOICE_HEIGHT_VH * 0.5;
  const upperBound = translateChoiceIdxToY(0);
  const translatedUpper = translateYToReelCopyIdx(upperBound, choicesLength, 1);

  const lowerBound = translateChoiceIdxToY(choicesLength - 1);
  const translatedLower = translateYToReelCopyIdx(lowerBound, choicesLength, 1);

  const isOver = y > translatedUpper + threshold;
  const isUnder = y < translatedLower - threshold;

  return isOver ? "over" : isUnder ? "under" : null;
}

function translateChosenIdxDownByReelCopy(
  chosenIdx: number,
  choicesLength: number,
  copyIdx: number
): number {
  return chosenIdx + choicesLength * copyIdx;
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
