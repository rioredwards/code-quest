import "./LeverProto.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface LeverProtoProps {}

const LeverProto: React.FC<LeverProtoProps> = () => {
  const dragYPos = useMotionValue(0);
  const dragXPos = useTransform(
    dragYPos,
    [0, 35, 70, 105, 140],
    [0, 15, 30, 15, 0]
  );
  const leverYPos = useTransform(dragYPos, [0, 140], [0, 10]);
  const rotationAngle = useTransform(dragYPos, [0, 140], [-45, 45]);

  return (
    <div className="lever-container">
      <motion.div className="lever-base" />
      <motion.div
        style={{ y: leverYPos, rotate: rotationAngle, translateX: 10 }}
        className="lever-handle"
      />
      <motion.div
        drag="y"
        style={{ y: dragYPos, x: dragXPos }}
        dragConstraints={{ top: 0, bottom: 140 }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
        className="fake-handle"
      />
    </div>
  );
};

export default LeverProto;
