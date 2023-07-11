import "./Window.css";
import { motion } from "framer-motion";
import { windowAnimationVariants } from "../motionConfigs/windowMotion";

interface WindowProps {}

const Window: React.FC<WindowProps> = () => {
  return (
    <motion.div
      key="window"
      className="reel-window"
      variants={windowAnimationVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={{ type: "spring", bounce: 0.5, duration: 2.5 }}
    />
  );
};

export default Window;
