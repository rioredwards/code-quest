import "./CopyIcon.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  boxVariants,
  containerVariants,
  tickVariants,
} from "../motionConfigs/copyIconMotion";

interface Props {}

const CopyIcon: React.FC<Props> = () => {
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

  return (
    <motion.div
      initial={"visible"}
      exit={"hidden"}
      variants={containerVariants}
      className="copy-icon-container">
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
    </motion.div>
  );
};

export default CopyIcon;
