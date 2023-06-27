import "./ReelTwo.css";
import { Variants, motion, useMotionValue } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

interface ReelTwoProps {
  choices: string[];
  delay: number;
  spinState: SpinState;
  chosenIdx: number;
}

export type SpinState = "preSpin" | "idleSpin" | "stoppingSpin" | "stopped";

const repeat = (arr: any[], n: number) => [].concat(...Array(n).fill(arr));

interface AnimateProps {
  choicesLength: number;
  chosenIdx: number;
}

const spinVariants: Variants = {
  preSpin: (props: AnimateProps) => ({
    y: `-${props.choicesLength * 2}rem`,
    transition: {
      duration: 0,
    },
  }),
  idleSpin: (props: AnimateProps) => ({
    y: [`-${props.choicesLength * 2}rem`, `0rem`],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  }),
  stoppingSpin: (props: AnimateProps) => ({
    y: `-${props.chosenIdx * 2}rem`,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  }),
  stopped: (props: AnimateProps) => ({
    transition: {
      duration: 0,
    },
  }),
};

const ReelTwo: React.FC<ReelTwoProps> = ({ choices, spinState, chosenIdx }) => {
  const doubledChoices = repeat(choices, 2);

  return (
    <div className="reel-container">
      <div className="reel-window">
        <motion.ul
          custom={{ choicesLength: choices.length, chosenIdx: chosenIdx }}
          variants={spinVariants}
          initial={false}
          animate={spinState}
          className="reel">
          {doubledChoices.map((choice, i) => (
            <li className="choice" key={i}>
              {choice}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default ReelTwo;
