import { useEffect, useRef } from "react";
import "./Display.css";
import { motion, useAnimationFrame } from "framer-motion";
import TypingSimulation from "./TypingSimulation";

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
      const containerHeightVal = getCSSVar(containerRef.current, "--height");
      const numberValue = sliceNumAndUnitFromCSSVar(containerHeightVal)[0];
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

function getCSSVar(el: HTMLElement, varName: string): string {
  const style = window.getComputedStyle(el);
  const myVarValue = style.getPropertyValue(varName);
  if (!myVarValue) throw new Error("Variable not found");

  return myVarValue;
}

function sliceNumAndUnitFromCSSVar(varVal: string): [number, string] {
  const matches = varVal.match(/(\d+(?:\.\d+)?)([a-z%]*)/);

  if (!matches) throw new Error("Invalid format of the CSS variable");

  const numberValue = parseFloat(matches[1]);
  const unit = matches[2];

  return [numberValue, unit];
}
