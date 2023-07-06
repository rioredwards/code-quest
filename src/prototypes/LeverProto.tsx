import "./LeverProto.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface LeverProtoProps {}

const LeverProto: React.FC<LeverProtoProps> = () => {
  const dragYPos = useMotionValue(0);
  const dragXPos = useTransform(dragYPos, [-70, 0, 70], [-30, 0, -30]);
  const leverYPos = useTransform(dragYPos, [-70, 0, 70], [-5, 0, 5]);
  const rotationAngle = useTransform(dragYPos, [-70, 0, 70], [-45, 0, 45]);

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
        dragConstraints={{ top: -70, bottom: 70 }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
        className="fake-handle"
      />
    </div>
  );
};

export default LeverProto;
