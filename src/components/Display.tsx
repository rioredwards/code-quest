import { useEffect, useRef } from "react";
import "./Display.css";
import { motion, useAnimationFrame } from "framer-motion";
import TypingSimulation from "./TypingSimulation";
import { getCSSVar, sliceNumAndUnitFromCSSVar } from "../utils/DOMUtils";

interface Props {
  text: string;
}

let containerHeight: number;

const Display: React.FC<Props> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((time) => {
    if (linesRef.current && containerHeight) {
      linesRef.current.style.transform = calcLinesMovementFromTime(
        time,
        containerHeight
      );
    }
  });

  useEffect(() => {
    if (containerRef.current) {
      const containerHeightString = getCSSVar(containerRef.current, "--height");
      const numberValue = sliceNumAndUnitFromCSSVar(containerHeightString)[0];
      containerHeight = numberValue;
    }
  }, []);

  return (
    <div ref={containerRef} className="display-container">
      <div className="display-glass" />
      <motion.div ref={linesRef} className="display-lines" />
      <TypingSimulation text={text} />
    </div>
  );
};

export default Display;

function calcLinesMovementFromTime(
  time: number,
  containerHeight: number
): string {
  const movement = -(time / 1000) % containerHeight;
  return `translateY(${-movement}vh)`;
}
