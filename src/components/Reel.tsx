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
  translateChoiceIdxToY,
  translateYToReelCopyIdx,
  yIsOutsideDragBounds,
  getIdleSpinLoopDur,
  preSpinAnimation,
  ReelMotionParams,
  idleStartAnimation,
  idleLoopAnimation,
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
      await animate([
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
            restSpeed: 0.1,
          },
        ],
        [scope.current, { y: numToVh(targetYInFirstReel) }, { duration: 0 }],
      ]);
      setSpinState(SpinState.POST);
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

    const animateSequence = async (): Promise<void> => {
      const animationParams: ReelMotionParams = {
        animate,
        reelEl: scope.current,
        yVh: y,
        choicesLength: choices.length,
        chosenIdx,
      };

      if (spinState === SpinState.PRE) {
        preSpinAnimation(animationParams);
      }
      if (spinState === SpinState.IDLE_START) {
        await idleStartAnimation(animationParams);
        setSpinState(SpinState.IDLE_LOOP);
        idleLoopAnimation(animationParams);
      }
      if (spinState === SpinState.IDLE_LOOP) return; // Idle loop animation is started by idleAnimationStart()
      if (spinState === SpinState.STOPPING) {
        await stoppingAnimation();
        setSpinState(SpinState.POST);
      }
      if (spinState === SpinState.POST) await postSpinAnimation();
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

export default Reel;
