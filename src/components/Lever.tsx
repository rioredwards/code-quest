import { useState } from "react";
import "./Lever.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface LeverProps {}
const pullThreshold = 100;
let pulled = false;

const Lever: React.FC<LeverProps> = () => {
  const [pulling, setPulling] = useState(false);
  const dragYPos = useMotionValue(0);
  const dragXPos = useTransform(dragYPos, [0, 70, 140], [0, 30, 0]);
  const leverYPos = useTransform(dragYPos, [0, 140], [0, 10]);
  const rotationAngle = useTransform(dragYPos, [0, 140], [-45, 45]);

  dragYPos.on("change", (yValue) => {
    if (!pulled && yValue > pullThreshold) {
      onPull();
      pulled = true;
    }
  });

  const onPull = () => {
    console.log("pull");
  };

  return (
    <div className="lever-container">
      <motion.div className="lever-base" />
      <motion.div
        style={{ y: leverYPos, rotate: rotationAngle, translateX: "1vh" }}
        className="lever-handle"
      />
      <motion.div
        drag="y"
        onDrag={() => setPulling(true)}
        onDragEnd={() => setPulling(false)}
        style={{
          y: dragYPos,
          x: dragXPos,
          cursor: pulling ? "grabbing" : "grab",
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
