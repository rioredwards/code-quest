import "./ReelTwo.css";
import { Variants, motion, useAnimate } from "framer-motion";

const REM = 16;
const CHOICE_HEIGHT = REM * 2;

interface ReelThreeProps {
  choices: string[];
  spinState: SpinState;
  chosenIdx: number;
}

export type SpinState = "preSpin" | "idleSpin" | "stoppingSpin" | "stopped";

function repeat<T>(arr: T[], n: number): T[] {
  return [].concat(...Array(n).fill(arr));
}

interface AnimateProps {
  yForSelectedChoice: number;
  yForChoicesMiddle: number;
  yForChoicesEnd: number;
  velocity: number;
}

const spinVariants: Variants = {
  preSpin: (props: AnimateProps) => ({
    y: props.yForChoicesEnd,
    transition: {
      duration: 0,
    },
  }),
  idleSpin: (props: AnimateProps) => ({
    y: [props.yForChoicesEnd, props.yForChoicesMiddle],
    transition: {
      repeat: Infinity,
      duration: 0.6,
      ease: "linear",
    },
  }),
  stoppingSpin: (props: AnimateProps) => ({
    y: props.yForSelectedChoice,
    transition: {
      type: "spring",
      bounce: 0.3,
      damping: 8,
      stiffness: 8,
      mass: 3,
    },
  }),
  stopped: (props: AnimateProps) => ({
    y: [null],
    transition: {
      duration: 0,
    },
  }),
};

const ReelThree: React.FC<ReelThreeProps> = ({
  choices,
  spinState,
  chosenIdx,
}) => {
  const repeatedChoices = repeat(choices, 4);

  return (
    <div className="reel-container">
      <div className="reel-window">
        <motion.ul
          custom={{
            yForSelectedChoice: translateYToChoiceIdx(
              chosenIdx,
              choices.length
            ),
            yForChoicesMiddle: getYForChoicesMiddle(choices.length),
            yForChoicesEnd: getYForChoicesEnd(choices.length),
          }}
          variants={spinVariants}
          initial={false}
          animate={spinState}
          className="reel">
          {repeatedChoices.map((choice, i) => (
            <li
              className={getStringClassName(i, chosenIdx, choices.length)}
              key={i}>
              {choice}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

function getStringClassName(
  i: number,
  chosenIdx: number,
  choicesLength: number
): string {
  const base = "choice";
  const chosenClass = i === chosenIdx + choicesLength ? "choiceVarChosen" : "";
  const altClass = i % 2 === 0 ? "choiceVar1" : "choiceVar2";

  return `${base} ${altClass} ${chosenClass}`;
}

function getYForChoicesMiddle(choicesLength: number): number {
  return -choicesLength * CHOICE_HEIGHT * 2;
}

function getYForChoicesEnd(choicesLength: number): number {
  return -choicesLength * CHOICE_HEIGHT * 3;
}

function translateYToChoiceIdx(
  chosenIdx: number,
  choicesLength: number
): number {
  return -(chosenIdx + choicesLength - 2) * CHOICE_HEIGHT;
}

export default ReelThree;
