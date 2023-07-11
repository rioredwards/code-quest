import { useState } from "react";
import "./TypingSimulation.css";
import { useAnimationFrame } from "framer-motion";
import {
  BLINK_DURATION_AFTER_TYPING,
  CURSOR_BLINK_SPEED,
  MAX_TYPE_DELAY,
  MIN_TYPE_DELAY,
  TEXT_WRAP_LENGTH,
} from "../motionConfigs/typingSimulationMotion";

interface Props {
  text: string;
}

let timeSinceLetterAdded = 0;
let timeSinceCursorBlinked = 0;

const TypingSimulation: React.FC<Props> = ({ text }) => {
  const [letterIdx, setLetterIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [blinking, setBlinking] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const addNextLetterToDisplayText = () => {
    if (!typing) return;
    if (letterIdx === text.length) setTyping(false);

    const updatedText = text.slice(0, letterIdx);
    setDisplayText(updatedText);
    setLetterIdx((prev) => prev + 1);
  };

  useAnimationFrame((_, delta) => {
    if (!blinking && !typing) return;

    timeSinceLetterAdded += delta;
    timeSinceCursorBlinked += delta;

    if (blinking) {
      if (!typing && text.length === TEXT_WRAP_LENGTH - 1) {
        // If the text is about to wrap, don't blink the cursor after typing
        setCursorVisible(false);
        setBlinking(false);
        return;
      }
      if (timeSinceCursorBlinked > CURSOR_BLINK_SPEED) {
        // Blink the cursor
        setCursorVisible((prev) => !prev);
        timeSinceCursorBlinked = 0;
      }
      if (timeSinceLetterAdded > BLINK_DURATION_AFTER_TYPING) {
        // Stop blinking the cursor after typing + delay after typing
        setCursorVisible(false);
        setBlinking(false);
      }
    }
    if (typing) {
      if (timeSinceLetterAdded > randomSpeed(MIN_TYPE_DELAY, MAX_TYPE_DELAY)) {
        addNextLetterToDisplayText();
        timeSinceLetterAdded = 0;
      }
    }
  });

  return (
    <p className="text">{cursorVisible ? `${displayText}_` : displayText}</p>
  );
};

export default TypingSimulation;

const randomSpeed = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
