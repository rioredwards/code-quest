import { useState } from "react";
import "./TypingSimulation.css";
import { useAnimationFrame } from "framer-motion";
import { SECOND } from "../data/constants";

interface Props {
  text: string;
}

let timeSinceLetterAdded = 0;
let timeSinceCursorBlinked = 0;
let letterIdx = 0;

const MIN_TYPE_SPEED = SECOND / 32;
const MAX_TYPE_SPEED = SECOND / 16;
const CURSOR_BLINK_SPEED = SECOND / 2;
const BLINK_DURATION_AFTER_TYPING = SECOND * 3;
// The text will wrap after this many characters this is important
// because if the final text is the exact length of the display,
// The cursor will blink on the next line, giving off a weird effect
const TEXT_WRAP_LENGTH = 61;

const TypingSimulation: React.FC<Props> = ({ text }) => {
  const [typing, setTyping] = useState(true);
  const [blinking, setBlinking] = useState(true);
  const [newText, setNewText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const updateText = () => {
    if (letterIdx > text.length) {
      setTyping(false);
      return;
    }
    const updatedText = text.slice(0, letterIdx);
    setNewText(updatedText);
    letterIdx++;
  };

  useAnimationFrame((_, delta) => {
    if (!blinking && !typing) return;

    timeSinceLetterAdded += delta;
    timeSinceCursorBlinked += delta;

    if (blinking) {
      if (!typing && text.length === TEXT_WRAP_LENGTH - 1) {
        setCursorVisible(false);
        setBlinking(false);
        return;
      }
      if (timeSinceCursorBlinked > CURSOR_BLINK_SPEED) {
        setCursorVisible((prev) => !prev);
        timeSinceCursorBlinked = 0;
      }
      if (timeSinceLetterAdded > BLINK_DURATION_AFTER_TYPING) {
        setCursorVisible(false);
        setBlinking(false);
      }
    }
    if (typing) {
      if (timeSinceLetterAdded > randomSpeed(MIN_TYPE_SPEED, MAX_TYPE_SPEED)) {
        updateText();
        timeSinceLetterAdded = 0;
      }
    }
  });

  const textWithCursor = cursorVisible ? `${newText}_` : newText;

  return <p className="text">{textWithCursor}</p>;
};

export default TypingSimulation;

const randomSpeed = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
