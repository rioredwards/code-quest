import "./Display.css";
import { motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";

interface Props {
  text: string;
}

const Display: React.FC<Props> = ({ text }) => {
  return (
    <div className="display-container">
      <div className="display-glass" />
      <motion.div animate={linesAnimation} className="display-lines" />
      <TypingSimulation text={text} />
    </div>
  );
};

export default Display;
