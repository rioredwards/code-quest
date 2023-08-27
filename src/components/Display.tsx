import "./Display.css";
import { motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";
import { useAppSelector } from "../store/hooks";
import { ReelIdx } from "../store/reels/reelsSlice";
import { typeChoices } from "../data/choices/typeChoices";
import { taskChoices } from "../data/choices/taskChoices";
import { techChoices } from "../data/choices/techChoices";
import { timeChoices } from "../data/choices/timeChoices";

interface Props {
  onCompleteTyping: () => void;
  isActive: boolean;
}

const Display: React.FC<Props> = ({ onCompleteTyping, isActive }) => {
  const typeIdx = useAppSelector(
    (state) => state.reels[ReelIdx.TYPE].chosenIdx
  );
  const type = typeIdx ? typeChoices[typeIdx].sentenceName : "";
  const taskIdx = useAppSelector(
    (state) => state.reels[ReelIdx.TASK].chosenIdx
  );
  const task = taskIdx ? taskChoices[taskIdx].sentenceName : "";
  const techIdx = useAppSelector(
    (state) => state.reels[ReelIdx.TECH].chosenIdx
  );
  const tech = techIdx ? techChoices[techIdx].sentenceName : "";
  const timeIdx = useAppSelector(
    (state) => state.reels[ReelIdx.TIME].chosenIdx
  );
  const time = timeIdx ? timeChoices[timeIdx].sentenceName : "";

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
