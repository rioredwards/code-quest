import { useState } from "react";
import "./Lever.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { SpinState } from "../App";

interface LeverProps {
  setSpinState: (spinState: SpinState) => void;
  setUserDragging: (isDragging: boolean) => void;
}
const pullThreshold = 100;

const Lever: React.FC<LeverProps> = ({ setSpinState, setUserDragging }) => {
  const [pulled, setPulled] = useState(false);
  const dragYPos = useMotionValue(0);
  const dragXPos = useTransform(dragYPos, [0, 70, 140], [0, 30, 0]);
  const leverYPos = useTransform(dragYPos, [0, 140], [0, 10]);
  const rotationAngle = useTransform(dragYPos, [0, 140], [-45, 45]);

  function onPull() {
    setSpinState(SpinState.IDLE);
  }

  function onDragStart() {
    setUserDragging(true);
  }

  function onDragEnd() {
    setUserDragging(false);
  }

  function onDrag() {
    if (!pulled && dragYPos.get() > pullThreshold) {
      onPull();
      setPulled(true);
    }
  }

  return (
    <div className="lever-container">
      <motion.div className="lever-base" />
      <motion.div
        style={{ y: leverYPos, rotate: rotationAngle, translateX: "1vh" }}
        className="lever-handle"
      />
      <motion.div
        drag="y"
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        style={{
          y: dragYPos,
          x: dragXPos,
        }}
        dragConstraints={{ top: 0, bottom: 140 }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
        className="fake-handle"
      />
    </div>
  );
};

export default Lever;
