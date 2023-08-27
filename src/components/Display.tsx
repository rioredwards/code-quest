import "./Display.css";
import { motion } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { linesAnimation } from "../motionConfigs/displayMotion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ReelIdx } from "../store/reels/reelsSlice";
import { typeChoices } from "../data/choices/typeChoices";
import { taskChoices } from "../data/choices/taskChoices";
import { techChoices } from "../data/choices/techChoices";
import { timeChoices } from "../data/choices/timeChoices";

interface Props {
  isActive: boolean;
}

const Display: React.FC<Props> = ({ isActive }) => {
  const dispatch = useAppDispatch();
  const typeIdx = useAppSelector(
    (state) => state.reels[ReelIdx.TYPE].chosenIdx
  );
  const type = typeIdx !== null ? typeChoices[typeIdx].sentenceName : "";
  const taskIdx = useAppSelector(
    (state) => state.reels[ReelIdx.TASK].chosenIdx
  );
  const task = taskIdx !== null ? taskChoices[taskIdx].sentenceName : "";
  const techIdx = useAppSelector(
    (state) => state.reels[ReelIdx.TECH].chosenIdx
  );
  const tech = techIdx !== null ? techChoices[techIdx].sentenceName : "";
  const timeIdx = useAppSelector(
    (state) => state.reels[ReelIdx.TIME].chosenIdx
  );
  const time = timeIdx !== null ? timeChoices[timeIdx].sentenceName : "";

  const displayText = `${type} Challenge: ${task} using ${tech} in ${time}!`;

  const onCompleteTyping = () => {
    dispatch({
      type: "reels/displayAnimationFinished",
    });
  };

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
