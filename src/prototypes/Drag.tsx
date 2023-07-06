import "./Drag.css";
import { motion, useMotionValue } from "framer-motion";

export const Drag = () => {
  const y = useMotionValue(0);

  return (
    <motion.div
      className="box"
      style={{ y }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
    />
  );
};
