import { useState } from "react";
import "./Lever.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PULL_THRESHOLD } from "../motionConfigs/leverMotion";

interface LeverProps {
  onPull: () => void;
}

const Lever: React.FC<LeverProps> = ({ onPull }) => {
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

  function onDrag() {
    if (!pulled && dragYPos.get() > PULL_THRESHOLD) {
      setPulled(true);
      onPull();
    }
  }

  function onHoverStart() {
    hoverRotationAngle.set(4);
  }

  function onHoverEnd() {
    hoverRotationAngle.set(0);
  }

  return (
    <>
      <motion.div className="lever-base" />
      <motion.div
        style={{ y: leverYPos, rotate: rotationAngle }}
        className="lever-handle"
      />
      <motion.div
        className="lever-drag-handle"
        drag="y"
        onDrag={onDrag}
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
    </>
  );
};

export default Lever;
