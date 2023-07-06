import "./Drag.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const Drag = () => {
  const y = useMotionValue(0);
  const yInput = [-100, 0, 100];

  return (
    <motion.div
      className="box"
      style={{ y }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
    />
  );
};
