import "./Reel.css";
import {
  AnimatePresence,
  PanInfo,
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
  useTransform,
  useVelocity,
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
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { convertPXtoVH } from "../utils/DOMUtils";

interface ReelProps {
  choices: string[];
  spinState: SpinState;
  chosenIdx: number | null;
  isDraggable: boolean;
  setUserDragging: (isDragging: boolean) => void;
}

let upperDragConstraint = 0;
let lowerDragConstraint = -CHOICE_HEIGHT_VH * (NUM_CHOICES_VISIBLE - 1);

const ReelCopy: React.FC<ReelProps> = ({
  choices,
  spinState,
  chosenIdx,
  isDraggable,
  setUserDragging,
}) => {
  const windowHeight = useWindowDimensions().height;
  const repeatedChoices = repeatArray(choices, 5); // Needed for infinite scrolling behavior
  const [scope, animate] = useAnimate();
  const [dragging, setDragging] = useState(false);
  const [yAtDragStart, setYAtDragStart] = useState<number | null>(null);
  const y = useMotionValue("0vh");
  const dragY = useMotionValue(0);
  console.log("windowHeight: ", windowHeight);

  /* useEffect(() => {
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
      if (!chosenIdx) throw new Error("chosenIdx is null");
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
      if (!chosenIdx) throw new Error("chosenIdx is null");
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
 */
  function onHoverStart(): void {
    if (dragging) return;
    animate(scope.current, { filter: "brightness(105%)" });
  }

  function onHoverEnd(): void {
    if (dragging) return;
    animate(scope.current, { filter: "brightness(100%)" });
  }

  function onDragStart(
    event: MouseEvent | TouchEvent | PointerEvent,
    { velocity, delta, offset, point }: PanInfo
  ): void {
    if (yAtDragStart !== null) return;
    console.log("drag start");
    animate(scope.current, { filter: "brightness(115%)" });
    setDragging(true);
    setUserDragging(true);
    setYAtDragStart(vhToNum(y.get()));
  }

  function onDrag(
    event: MouseEvent | TouchEvent | PointerEvent,
    { velocity, delta, offset, point }: PanInfo
  ): void {
    if (!windowHeight || yAtDragStart === null) return;
    const yOffsetInVh = convertPXtoVH(offset.y, windowHeight);
    const newY = yAtDragStart + yOffsetInVh;
    console.log("newY: ", newY);
    const roundedDragY = roundYToNearestChoice(newY);
    console.log("roundedDragY: ", roundedDragY);
    // if (yIsOutsideDragBounds(roundedDragY, choices.length)) return;

    animate(scope.current, { y: numToVh(newY) });
  }

  function onDragEnd(): void {
    // const roundedDragY = roundYToNearestChoice(vhToNum(y.get()));
    // animate(scope.current, {
    //   y: numToVh(roundedDragY),
    //   filter: "brightness(100%)",
    // });
    // setDragging(false);
    // setUserDragging(false);
    // setYAtDragStart(0);
    // dragY.set(0);
  }

  useEffect(() => {
    upperDragConstraint = getUpperDragConstraint(choices.length);
    lowerDragConstraint = getLowerDragConstraint(choices.length);
  }, []);

  return (
    <div className="reel-container">
      <div className="reel-gradient" />
      {isDraggable && (
        <motion.div
          className="drag-handle"
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
      <AnimatePresence>{!isDraggable && <Window />}</AnimatePresence>
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

function getUpperDragConstraint(choicesLength: number): number {
  const upperBound = translateChoiceIdxToY(0);
  const translatedUpper = translateYDownByReelCopy(
    upperBound,
    choicesLength,
    1
  );
  return translatedUpper;
}

function getLowerDragConstraint(choicesLength: number): number {
  const lowerBound = translateChoiceIdxToY(choicesLength - 1);
  const translatedLower = translateYDownByReelCopy(
    lowerBound,
    choicesLength,
    1
  );
  return translatedLower;
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

function translateChosenIdxDownByReelCopy(
  chosenIdx: number,
  choicesLength: number,
  copyIdx: number
): number {
  return chosenIdx + choicesLength * copyIdx;
}

function translateYDownByReelCopy(
  currY: number,
  choicesLength: number,
  copyIdx: number
): number {
  return currY - CHOICE_HEIGHT_VH * (choicesLength * copyIdx);
}

function getIdleSpinDuration(choicesLength: number): number {
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

export default ReelCopy;

/* function onHoverStart(): void {
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
    setDragStartY(totalY.get());
  }

  function onDrag(): void {
    if (!dragStartY || !windowHeight) return;
    const currDragY = dragSpinY.get();
    const dragYInVh = convertPXtoVH(currDragY, windowHeight);
    const roundedY = roundYToNearestChoice(dragStartY + dragYInVh);

    animate(scope.current, { y: numToVh(roundedY) });
  }

  dragSpinY.on("change", (latest) => {
    console.log("dragSpinY: ", latest);
  });

  function onDragEnd(): void {
    animate(scope.current, { filter: "brightness(100%)" });
    setDragging(false);
    setUserDragging(false);
    setDragStartY(0);
    dragSpinY.set(0);
  } */
