import "./Reel.css";
import {
  motion,
  useAnimate,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import Choice from "./Choice";
import { SpinState } from "../App";
import { useEffect } from "react";
import { repeatArray } from "../utils/genUtils";
import {
  BASE_SPIN_SPEED,
  ReelMotionBaseParams,
  jumpUpOneReel,
  shiftDownChoice,
  siftDownOneReel,
} from "../motionConfigs/reelMotion";
import { getReelDimensions } from "../utils/getReelDimensions";

interface ReelProps {
  choices: string[];
  spinState: SpinState;
  chosenIdx: number | null;
  windowHeight: number;
}

const SpinReel: React.FC<ReelProps> = ({
  choices,
  spinState,
  chosenIdx,
  windowHeight,
}) => {
  const repeatedReel = repeatArray(choices, 5); // Needed for infinite scrolling behavior
  const { choiceHeight, reelHeight } = getReelDimensions(
    windowHeight,
    choices.length
  );
  const [scope, animate] = useAnimate();
  const yShift = useMotionValue(0);
  const transform = useMotionTemplate`translateY(${yShift}px)`;

  useEffect(() => {
    const animateParams: ReelMotionBaseParams = {
      animate,
      yShift,
      currYShiftValue: yShift.get(),
    };
    async function animateSequence() {
      await siftDownOneReel({
        ...animateParams,
        reelHeight,
        choicesLength: choices.length,
      });

      await jumpUpOneReel({
        ...animateParams,
        reelHeight,
        choicesLength: choices.length,
      });

      await siftDownOneReel({
        ...animateParams,
        reelHeight,
        choicesLength: choices.length,
      });

      await jumpUpOneReel({
        ...animateParams,
        reelHeight,
        choicesLength: choices.length,
      });

      // await shiftDownOneReel();
      // await jumpUpOneReel();
      // await shiftDownOneReel();
      // await shiftDownChoice({
      //   ...animateParams,
      //   choiceHeight,
      // });
      // await shiftUpChoice();
    }

    animateSequence();
  }, []);

  return (
    <div className="reel-container">
      <div className="reel-gradient" />
      <motion.ul className="reel" style={{ transform }} ref={scope}>
        {repeatedReel.map((choice, i) => (
          <Choice
            key={i}
            classes={getChoiceClassName(i)}
            displayName={choice}></Choice>
        ))}
      </motion.ul>
    </div>
  );
};

function getChoiceClassName(i: number): string {
  const base = "choice";
  const altClass = i % 2 === 0 ? "choiceVar1" : "choiceVar2";
  const classesStr = `${base} ${altClass}`;

  return classesStr;
}

export default SpinReel;
