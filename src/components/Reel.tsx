import "./Reel.css";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
} from "../motionConfigs/reelMotion";
import Window from "./Window";
import ChoiceList from "./ChoiceList";
import { Choice, SpinState } from "../types";

interface ReelProps {
  choices: Choice[];
  spinState: SpinState;
  cycleSpinState: () => void;
  chosenIdx: number | null;
  isUserLocked: boolean;
}

const INTERNALLY_TRIGGERED_SPIN_STATES: ReadonlyArray<SpinState> = [
  SpinState.IDLE_LOOP,
  SpinState.POST,
];

const Reel: React.FC<ReelProps> = ({
  choices,
  spinState,
  cycleSpinState,
  chosenIdx,
  isUserLocked,
}) => {
  const activeSpinMotion = useRef(spinState);
  const isSpinLocked = spinState !== SpinState.PRE;
  const [scope, animate] = useAnimate();
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const y = useMotionValue("0vh");
  const yNum = useTransform(y, vhToNum);
  const dragY = useMotionValue(0);
  const yVelocity = useVelocity(yNum);

  // When spinState changes, animate the reel
  useEffect(() => {
    if (
      isUserLocked ||
      INTERNALLY_TRIGGERED_SPIN_STATES.includes(spinState) ||
      spinState === activeSpinMotion.current
    ) {
      return;
    }

    activeSpinMotion.current = spinState;
    async function animateSequence(): Promise<void> {
      const animationParams: ReelMotionParams = {
        animate,
        reelEl: scope.current,
        yVh: y,
        choicesLength: choices.length,
        chosenIdx,
      };

      const newSpinState = await setNewAnimation(spinState, animationParams);
      if (newSpinState) {
        console.log("newSpinState: ", newSpinState);
        activeSpinMotion.current = newSpinState;
        // cycleSpinState();
      }
    }

    animateSequence();
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
    console.log("onDragStart");
    if (dragStartY) return;
    animate(scope.current, { filter: "brightness(115%)" });
    setDragging(true);
    setDragStartY(vhToNum(y.get()));
  }

  function onDrag(): void {
    console.log(dragStartY);
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
      {!isUserLocked && !isSpinLocked && (
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
      <AnimatePresence>
        {(isUserLocked || isSpinLocked) && <Window />}
      </AnimatePresence>
      <motion.ul className="reel" style={{ y }} ref={scope}>
        <ChoiceList
          choices={choices}
          chosenIdx={chosenIdx}
          highlightChosen={spinState === SpinState.POST}
        />
      </motion.ul>
    </div>
  );
};

export default Reel;

// This function calls an animation function based on the current spinState
// If the next animation and spinState is triggered by an animation ending,
// This function will return the next spinState to be updated in the parent component
// (The next spin state COULD be set within this function, but that would be a strange side effect and bad practice)
async function setNewAnimation(
  spinState: SpinState,
  animationParams: ReelMotionParams
): Promise<SpinState | null> {
  switch (spinState) {
    case SpinState.PRE:
      preSpinAnimation(animationParams);
      return null;
    case SpinState.IDLE_START:
      await idleStartAnimation(animationParams);
      idleLoopAnimation(animationParams);
      return SpinState.IDLE_LOOP;
    case SpinState.STOPPING:
      await stoppingAnimation(animationParams);
      postSpinAnimation(animationParams);
      return SpinState.POST;
    default:
      return null;
  }
}
