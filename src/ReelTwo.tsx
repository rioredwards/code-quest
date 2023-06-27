import "./ReelTwo.css";
import { Variants, motion } from "framer-motion";

interface ReelTwoProps {
  choices: string[];
  delay: number;
  spinning: boolean;
}

const repeat = (arr: any[], n: number) => [].concat(...Array(n).fill(arr));

const spinVariants = {
  idle: (i: number) => ({
    y: `-${i * 2}rem`,
    transition: {
      duration: 0,
    },
  }),
  idleSpin: (i: number) => ({
    y: [`-${i * 2}rem`, `0rem`],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  }),
  stopSpin: (i: number) => ({
    y: `0rem`,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  }),
};

const ReelTwo: React.FC<ReelTwoProps> = ({ choices, spinning }) => {
  const doubledChoices = repeat(choices, 2);

  return (
    <div className="reel-container">
      <div className="reel-window">
        <motion.ul
          custom={choices.length}
          variants={spinVariants}
          initial="idle"
          animate={spinning ? "idleSpin" : "stopSpin"}
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
