import "./ReelTwo.css";
import {
  Variants,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface ReelThreeProps {
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
    y: [`-${props.choicesLength * 2}rem`, "0rem"],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  }),
  stoppingSpin: (props: AnimateProps) => ({
    y: [null, translateChoiceIdxToY(props.chosenIdx)],
    transition: {
      duration: 2,
      ease: "easeOut",
      velocity: 0,
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
  const [scope, animate] = useAnimate();
  const doubledChoices = repeat(choices, 2);
  let y = useMotionValue(`-${choices.length * 2}rem`);
  let choiceIdxAtY = translateYToChoiceIdx(y.get());
  if (spinState === "stoppingSpin") {
    console.log("y.get()", y.get());
    console.log(
      "translateChoiceIdxToY(chosenIdx)",
      translateChoiceIdxToY(chosenIdx)
    );
  }

  return (
    <div className="reel-container">
      <div className="reel-window">
        <motion.ul
          ref={scope}
          custom={{
            choicesLength: choices.length,
            chosenIdx: chosenIdx,
            choiceIdxAtY: choiceIdxAtY,
          }}
          variants={spinVariants}
          initial={false}
          animate={spinState}
          style={{ y }}
          className="reel">
          {doubledChoices.map((choice, i) => (
            <li
              className="choice"
              key={i}
              style={{
                backgroundColor: `${i === chosenIdx ? "green" : ""}`,
              }}>
              {choice}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default ReelThree;

function translateChoiceIdxToY(choiceIdx: number) {
  return `-${choiceIdx * 2}rem`;
}

function translateYToChoiceIdx(y: string) {
  return Math.floor(Math.abs(Number(y.replace("rem", "")) / 2));
}
