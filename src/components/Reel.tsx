import "./Reel.css";
import { Variants, motion } from "framer-motion";
import Choice from "./Choice";

// useCycle: https://www.youtube.com/watch?v=wAwJj-KGb38&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=17&ab_channel=TheNetNinja

const REM = 16;
const CHOICE_HEIGHT = REM * 2;

interface ReelProps {
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
  spinDuration: number;
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
      duration: props.spinDuration,
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

const Reel: React.FC<ReelProps> = ({ choices, spinState, chosenIdx }) => {
  const repeatedChoices = repeat(choices, 4);

  return (
    <motion.ul
      className="reel"
      custom={{
        yForSelectedChoice: translateYToChoiceIdx(chosenIdx, choices.length),
        yForChoicesMiddle: getYForChoicesMiddle(choices.length),
        yForChoicesEnd: getYForChoicesEnd(choices.length),
        spinDuration: getSpinLoopDuration(choices.length),
      }}
      variants={spinVariants}
      initial={false}
      animate={spinState}>
      {repeatedChoices.map((choice, i) => (
        <li key={i}>
          <Choice
            classes={getChoiceClassName(i, chosenIdx, choices.length)}
            displayName={choice}></Choice>
        </li>
      ))}
    </motion.ul>
  );
};

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

function getSpinLoopDuration(choicesLength: number): number {
  return choicesLength / 4;
}

function getChoiceClassName(
  i: number,
  chosenIdx: number,
  choicesLength: number
): string {
  const base = "choice";
  const chosenClass = i === chosenIdx + choicesLength ? "choiceVarChosen" : "";
  const altClass = i % 2 === 0 ? "choiceVar1" : "choiceVar2";

  return `${base} ${altClass} ${chosenClass}`;
}

export default Reel;
