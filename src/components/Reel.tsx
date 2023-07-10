import "./Reel.css";
import {
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
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const y = useMotionValue("0vh");
  const yNum = useTransform(y, vhToNum);
  const dragY = useMotionValue(0);
  const yVelocity = useVelocity(yNum);

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

    const idleAnimationStart = async () => {
      const upperY = vhToNum(y.get());
      const lowerY = translateYDownByReelCopy(
        vhToNum(y.get()),
        choices.length,
        1
      );
      const spinDuration = getIdleSpinDuration(choices.length);
      const animation = animate([
        [
          scope.current,
          { y: [null, numToVh(lowerY)] },
          {
            duration: spinDuration + 1,
            ease: "easeIn",
          },
        ],
        [
          scope.current,
          { y: numToVh(upperY) },
          {
            duration: 0,
          },
        ],
      ]);
      animation.then(idleAnimationLoop);
    };

    const idleAnimationLoop = async () => {
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
      if (spinState === SpinState.IDLE) await idleAnimationStart();
      if (spinState === SpinState.STOPPING) await stoppingAnimation();
      if (spinState === SpinState.POST) await postSpinAnimation();
      if (spinState === SpinState.PRE) await preSpinAnimation();
    };

    animateSequence();
  }, [spinState, chosenIdx]);

  function onDragStart(): void {
    if (dragStartY) return;
    setDragging(true);
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

    dragY.set(0);
  }

  function onDragEnd(): void {
    setDragging(false);
    setDragStartY(0);
    dragY.set(0);
  }

  return (
    <div className="reel-container">
      <div className="reel-gradient" />
      {isDraggable && (
        <motion.div
          className={`drag-handle ${dragging ? "dragging" : ""}`}
          style={{ y: dragY }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragSnapToOrigin={true}
          dragElastic={0.1}
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        />
      )}
      {!isDraggable && <div className="reel-window" />}
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

function roundYToNearestChoice(y: number): number {
  return Math.round(y / CHOICE_HEIGHT) * CHOICE_HEIGHT;
}

function yIsOutsideDragBounds(
  y: number,
  choicesLength: number
): "over" | "under" | null {
  const threshold = CHOICE_HEIGHT * 0.5;
  const upperBound = translateChoiceIdxToY(0);
  const translatedUpper = translateYDownByReelCopy(
    upperBound,
    choicesLength,
    1
  );

  const lowerBound = translateChoiceIdxToY(choicesLength - 1);
  const translatedLower = translateYDownByReelCopy(
    lowerBound,
    choicesLength,
    1
  );

  const isOver = y > translatedUpper + threshold;
  const isUnder = y < translatedLower - threshold;

  return isOver ? "over" : isUnder ? "under" : null;
}

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
