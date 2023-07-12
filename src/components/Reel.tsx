import "./Reel.css";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
  useVelocity,
} from "framer-motion";
import { SpinState } from "../App";
import { useEffect, useState } from "react";
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

interface ReelProps {
  choices: string[];
  spinState: SpinState;
  setSpinState: (spinState: SpinState) => void;
  chosenIdx: number | null;
  isUserLocked: boolean;
  setUserIsDragging: (isDragging: boolean) => void;
}

const Reel: React.FC<ReelProps> = ({
  choices,
  spinState,
  setSpinState,
  chosenIdx,
  setUserIsDragging,
  isUserLocked,
}) => {
  const isSpinLocked = spinState !== SpinState.PRE;
  const [scope, animate] = useAnimate();
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const y = useMotionValue("0vh");
  const yNum = useTransform(y, vhToNum);
  const dragY = useMotionValue(0);
  const yVelocity = useVelocity(yNum);

  useEffect(() => {
    if (isUserLocked) return;

    const animateSequence = async (): Promise<void> => {
      const animationParams: ReelMotionParams = {
        animate,
        reelEl: scope.current,
        yVh: y,
        choicesLength: choices.length,
        chosenIdx,
      };

      const newSpinState = await setNewAnimation(spinState, animationParams);
      if (newSpinState) setSpinState(newSpinState);
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
    setUserIsDragging(true);
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
    setUserIsDragging(false);
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

// This function calls an animation function based on the current spinState
// If the next animation and spinState is triggered by an animation ending,
// This function will return the next spinState to be updated in the parent component
// (The next spin state COULD be set within this function, but that would be a crazy side effect and bad practice)
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
      return SpinState.POST;
    case SpinState.POST:
      postSpinAnimation(animationParams);
      return null;
    default:
      return null;
  }
}

export default Reel;
