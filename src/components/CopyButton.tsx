import { useEffect } from "react";
import "./CopyButton.css";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface Props {
  text: string;
}

const buttonVariants = {
  visible: { opacity: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0, transition: { duration: 1 } },
};

const tickVariants = {
  visible: { opacity: 1, scale: 1, pathLength: 1 },
  hidden: { opacity: 0, scale: 0.1, pathLength: 0 },
};

const boxVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.1 },
};

const CopyButton: React.FC<Props> = ({ text }) => {
  const dispatch = useAppDispatch();
  const copied = useAppSelector(({ display }) => display.copied);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        dispatch({ type: "display/copiedTimeout" });
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied, dispatch]);

  const copyToClipboard = () => {
    dispatch({ type: "display/copied" });
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.button
      initial={"visible"}
      exit={"hidden"}
      variants={buttonVariants}
      className="copy-button-button"
      onClick={copyToClipboard}>
      <motion.svg viewBox="0 0 49.56 49.56" className="copy-button-svg">
        <motion.polyline
          className="check"
          points="4.16 32.16 20.13 42.22 45.9 9.81"
          variants={tickVariants}
          animate={copied ? "visible" : "hidden"}
        />

        <motion.path
          animate={copied ? "hidden" : "visible"}
          className="box"
          variants={boxVariants}
          d="m10.38,39.17h-3.02c-2.68,0-4.87-2.19-4.87-4.87V7.37c0-2.68,2.19-4.87,4.87-4.87h26.93c2.68,0,4.87,2.19,4.87,4.87v3.02"
        />
        <motion.rect
          animate={copied ? "hidden" : "visible"}
          className="box"
          variants={boxVariants}
          x="10.38"
          y="10.38"
          width="36.67"
          height="36.67"
          rx="4.87"
          ry="4.87"
        />
      </motion.svg>
    </motion.button>
  );
};

export default CopyButton;
