import "./Display.css";
import { motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";

interface Props {
  onComplete: () => void;
  isActive: boolean;
  text: string;
}

const Display: React.FC<Props> = ({ text, onComplete, isActive }) => {
  return (
    <div className="display-container">
      <div className="display-glass" />
      {isActive && (
        <>
          <motion.div animate={linesAnimation} className="display-lines" />
          <TypingSimulation text={text} onComplete={onComplete} />
        </>
      )}
    </div>
  );
};

export default Display;
