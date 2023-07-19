import { useState } from "react";
import "./Lever.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PULL_THRESHOLD } from "../motionConfigs/leverMotion";
import { SpinState } from "../types";

interface LeverProps {
  spinState: SpinState;
  setSpinState: (spinState: SpinState) => void;
  setUserIsDragging: (isDragging: boolean) => void;
}

const Lever: React.FC<LeverProps> = ({
  spinState,
  setSpinState,
  setUserIsDragging,
}) => {
  const [pulled, setPulled] = useState(false);
  const dragYPos = useMotionValue(0);
  const hoverRotationAngle = useSpring(0);
  const dragXPos = useTransform(dragYPos, [0, 70, 140], [0, 30, 0]);
  const leverYPos = useTransform(dragYPos, [0, 140], [0, 10]);
  const dragAndHoverRotation = useTransform<number, number>(
    [dragYPos, hoverRotationAngle],
    ([latestDragYPos, latestHoverRotationAngle]) =>
      latestDragYPos + latestHoverRotationAngle
  );
  const rotationAngle = useTransform(dragAndHoverRotation, [0, 140], [-45, 45]);

  function onPull() {
    if (spinState === SpinState.PRE) {
      setSpinState(SpinState.IDLE_START);
    }
  }

  function onDragStart() {
    setUserIsDragging(true);
  }

  function onDragEnd() {
    setUserIsDragging(false);
  }

  function onDrag() {
    if (!pulled && dragYPos.get() > PULL_THRESHOLD) {
      onPull();
      setPulled(true);
    }
  }

  function onHoverStart() {
    hoverRotationAngle.set(4);
  }

  function onHoverEnd() {
    hoverRotationAngle.set(0);
  }

  return (
    <div className="lever-container">
      <motion.div className="lever-base" />
      <motion.div
        style={{ y: leverYPos, rotate: rotationAngle }}
        className="lever-handle"
      />
      <motion.div
        className="lever-drag-handle"
        drag="y"
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        whileTap={{ cursor: "grabbing" }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        style={{
          y: dragYPos,
          x: dragXPos,
        }}
        dragConstraints={{ top: 0, bottom: 140 }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
      />
    </div>
  );
};

export default Lever;
