import "./Display.css";
import { motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";
import { useAppSelector } from "../store/hooks";

interface Props {
  onCompleteTyping: () => void;
  isActive: boolean;
}

const Display: React.FC<Props> = ({ onCompleteTyping, isActive }) => {
  const { type, task, tech, time } = useAppSelector((state) => state.challenge);
  const displayText = `${type} Challenge: ${task} using ${tech} in ${time}!`;

  return (
    <div className="display-container">
      <div className="display-glass" />
      {isActive && (
        <>
          <motion.div animate={linesAnimation} className="display-lines" />
          <TypingSimulation
            text={displayText}
            onCompleteTyping={onCompleteTyping}
          />
        </>
      )}
    </div>
  );
};

export default Display;
