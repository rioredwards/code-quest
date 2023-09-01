import "./Reel.css";
import {
  AnimatePresence,
  AnimationPlaybackControls,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
  useVelocity,
} from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { numToVh, vhToNum } from "../utils/genUtils";
import {
  roundYToNearestChoice,
  yIsOutsideDragBounds,
  preSpinAnimation,
  ReelMotionParams,
  idleStartAnimation,
  idleLoopAnimation,
  stoppingAnimation,
  postSpinAnimation,
  yToChoiceIdx,
} from "../motionConfigs/reelMotion";
import Window from "./Window";
import ChoiceList from "./ChoiceList";
import { Choice, SpinState } from "../types";

interface ReelProps {
  choices: readonly Choice[];
  spinState: SpinState;
  onFinishedIdleStart: () => void;
  onFinishedStopping: () => void;
  chosenIdx: number | null;
  isLocked: boolean;
  choiceIdxAtCurrYPos: MutableRefObject<number | null>;
}

const Reel: React.FC<ReelProps> = ({
  choices,
  spinState,
  onFinishedIdleStart,
  onFinishedStopping,
  chosenIdx,
  isLocked,
  choiceIdxAtCurrYPos,
}) => {
  const [scope, animate] = useAnimate();
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const y = useMotionValue("0vh");
  const yNum = useTransform(y, vhToNum);
  const dragY = useMotionValue(0);
  const yVelocity = useVelocity(yNum);
  const animationControls = useRef<AnimationPlaybackControls | null>(null);
  const prevSpinState = useRef<SpinState>(spinState);

  y.on("change", () => {
    if (spinState !== "PRE") return;
    choiceIdxAtCurrYPos.current = yToChoiceIdx(
      vhToNum(y.get()),
      choices.length
    );
    console.log(choiceIdxAtCurrYPos.current);
  });

  // When spinState changes, animate the reel
  useEffect(() => {
    async function animateSequence(): Promise<void> {
      const animationParams: ReelMotionParams = {
        animate,
        reelEl: scope.current,
        yVh: y,
        choicesLength: choices.length,
        chosenIdx,
      };

      if (spinState === "IDLE_START") {
        animationControls.current = setNewAnimation(spinState, animationParams);
        animationControls.current?.then(() => {
          // This check prevents the animation if the user
          // clicks the spin light to stop the reel
          // before the idle animation has started
          if (prevSpinState.current === "IDLE_START") {
            onFinishedIdleStart();
          }
        });
      } else if (spinState === "STOPPING") {
        if (prevSpinState.current === "IDLE_START")
          animationControls.current?.stop();
        animationControls.current = setNewAnimation(spinState, animationParams);
        animationControls.current?.then(() => onFinishedStopping());
      } else {
        animationControls.current = setNewAnimation(spinState, animationParams);
      }
    }

    animateSequence();
    prevSpinState.current = spinState;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinState]);

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
    setDragStartY(0);
    dragY.set(0);
  }

  return (
    <div className="reel-container">
      <div className="reel-gradient" />
      {!isLocked && (
        <motion.div
          className="drag-handle"
          style={{ y: dragY }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragSnapToOrigin={true}
          dragElastic={0.1}
          whileTap={{ cursor: "grabbing" }}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        />
      )}
      <AnimatePresence>{isLocked && <Window />}</AnimatePresence>
      <motion.ul className="reel" style={{ y }} ref={scope}>
        <ChoiceList
          choices={choices}
          chosenIdx={chosenIdx}
          highlightChosen={spinState === "POST" || spinState === "PRE"}
        />
      </motion.ul>
    </div>
  );
};

export default Reel;

// This function calls an animation function based on the current spinState
// If the next animation and spinState is triggered by an animation ending,
// This function will return the next spinState to be updated in the parent component
function setNewAnimation(
  spinState: SpinState,
  animationParams: ReelMotionParams
): AnimationPlaybackControls | null {
  switch (spinState) {
    case "PRE":
      return preSpinAnimation(animationParams);
    case "IDLE_START":
      return idleStartAnimation(animationParams);
    case "IDLE_LOOP":
      return idleLoopAnimation(animationParams);
    case "STOPPING":
      return stoppingAnimation(animationParams);
    case "POST":
      return postSpinAnimation(animationParams);
    default:
      return null;
  }
}
