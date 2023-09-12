import { useEffect, useRef, useState } from 'react';
import './TypingSimulation.css';
import { useAnimationFrame } from 'framer-motion';
import {
  BLINK_DURATION_AFTER_TYPING,
  CURSOR_BLINK_SPEED,
  MAX_TYPE_DELAY,
  MIN_TYPE_DELAY,
  TEXT_WRAP_LENGTH,
  EXTRA_DELAY_BETWEEN_WORDS,
} from '../motionConfigs/typingSimulationMotion';

interface Props {
  text: string;
  onCompleteTyping: () => void;
}

const TypingSimulation: React.FC<Props> = ({ text, onCompleteTyping }) => {
  const prevText = useRef<string | null>(null);
  const letterIdx = useRef(0);
  const blinking = useRef(true);
  const typing = useRef(true);
  const timeSinceLetterAdded = useRef(0);
  const timeSinceCursorBlinked = useRef(0);
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const prevLetterAdded: string | undefined = text[letterIdx.current - 2];

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

  useEffect(() => {
    if (!typing.current && text !== displayText) {
      setDisplayText(text);
    }
  }, [text, typing, displayText]);

  useEffect(() => {
    if (prevText.current === null || prevText.current !== text) {
      prevText.current = text;
      letterIdx.current = 0;
      blinking.current = true;
      typing.current = true;
      timeSinceLetterAdded.current = 0;
      timeSinceCursorBlinked.current = 0;
      setDisplayText('');
      setCursorVisible(true);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [text]);

  useAnimationFrame((_, delta) => {
    if (!blinking.current && !typing.current) return;

    timeSinceLetterAdded.current += delta;
    timeSinceCursorBlinked.current += delta;

    if (blinking.current) {
      if (!typing.current && text.length === TEXT_WRAP_LENGTH - 1) {
        // If the text is about to wrap, don't blink the cursor after typing
        onFinishedTypingAndBlinking();
        return;
      }
      if (timeSinceCursorBlinked.current > CURSOR_BLINK_SPEED) {
        // Blink the cursor
        setCursorVisible((prev) => !prev);
        timeSinceCursorBlinked.current = 0;
      }
      if (timeSinceLetterAdded.current > BLINK_DURATION_AFTER_TYPING) {
        // Stop blinking the cursor after typing + delay after typing
        onFinishedTypingAndBlinking();
      }
    }
    if (typing.current) {
      if (prevLetterAdded !== ' ' && prevLetterAdded !== undefined) {
        if (timeSinceLetterAdded.current > randomDelay(MIN_TYPE_DELAY, MAX_TYPE_DELAY)) {
          addNextLetterToDisplayText();
          timeSinceLetterAdded.current = 0;
        }
      } else {
        if (
          timeSinceLetterAdded.current >
          randomDelay(MIN_TYPE_DELAY, MAX_TYPE_DELAY) + EXTRA_DELAY_BETWEEN_WORDS
        ) {
          addNextLetterToDisplayText();
          timeSinceLetterAdded.current = 0;
        }
      }
    }
  });

  return <p className="text">{cursorVisible ? `${displayText}_` : displayText}</p>;
};

export default TypingSimulation;

const randomDelay = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
