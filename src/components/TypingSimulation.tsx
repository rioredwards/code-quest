import { useRef, useState } from "react";
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
  onCompleteTyping: () => void;
}

let timeSinceLetterAdded = 0;
let timeSinceCursorBlinked = 0;

const TypingSimulation: React.FC<Props> = ({ text, onCompleteTyping }) => {
  const letterIdx = useRef(0);
  const blinking = useRef(true);
  const typing = useRef(true);
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const addNextLetterToDisplayText = () => {
    if (!typing.current) return;
    if (letterIdx.current === text.length) typing.current = false;

    const updatedText = text.slice(0, letterIdx.current);
    setDisplayText(updatedText);
    letterIdx.current += 1;
  };

  function onFinishedTypingAndBlinking() {
    blinking.current = false;
    setCursorVisible(false);
    onCompleteTyping();
  }

  useAnimationFrame((_, delta) => {
    if (!blinking.current && !typing.current) return;

    timeSinceLetterAdded += delta;
    timeSinceCursorBlinked += delta;

    if (blinking.current) {
      if (!typing.current && text.length === TEXT_WRAP_LENGTH - 1) {
        // If the text is about to wrap, don't blink the cursor after typing
        onFinishedTypingAndBlinking();
        return;
      }
      if (timeSinceCursorBlinked > CURSOR_BLINK_SPEED) {
        // Blink the cursor
        setCursorVisible((prev) => !prev);
        timeSinceCursorBlinked = 0;
      }
      if (timeSinceLetterAdded > BLINK_DURATION_AFTER_TYPING) {
        // Stop blinking the cursor after typing + delay after typing
        onFinishedTypingAndBlinking();
      }
    }
    if (typing.current) {
      if (timeSinceLetterAdded > randomSpeed(MIN_TYPE_DELAY, MAX_TYPE_DELAY)) {
        addNextLetterToDisplayText();
        timeSinceLetterAdded = 0;
      }
    }
  });

  // if (!typing && !cursorVisible) onComplete();

  return (
    <p className="text">{cursorVisible ? `${displayText}_` : displayText}</p>
  );
};

export default TypingSimulation;

const randomSpeed = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
