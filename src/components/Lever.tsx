import './Lever.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PULL_THRESHOLD, THROTTLE_MS, filterVariants } from '../motionConfigs/leverMotion';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectReelsSpinStates } from '../store/reels/reelsSlice';
import { selectHelpTargetEl } from '../store/help/helpSlice';

interface LeverProps {}

const Lever: React.FC<LeverProps> = () => {
  const dispatch = useAppDispatch();
  const dragYPos = useMotionValue(0);
  const hoverRotationAngle = useSpring(0);
  const dragXPos = useTransform(dragYPos, [0, 70, 140], [0, 30, 0]);
  const leverYPos = useTransform(dragYPos, [0, 140], [0, 10]);
  const dragAndHoverRotation = useTransform<number, number>(
    [dragYPos, hoverRotationAngle],
    ([latestDragYPos, latestHoverRotationAngle]) => latestDragYPos + latestHoverRotationAngle
  );
  const rotationAngle = useTransform(dragAndHoverRotation, [0, 140], [-45, 45]);
  const isThrottled = useRef(false);

  const spinStates = useAppSelector(selectReelsSpinStates);
  const reelsCanSpin = spinStates.includes('PRE');

  const highlightedForHelp = useAppSelector(selectHelpTargetEl) === 'LEVER';

  function onDrag() {
    if (reelsCanSpin && dragYPos.get() > PULL_THRESHOLD && !isThrottled.current) {
      dispatch({ type: 'display/stopDisplay' });
      dispatch({ type: 'reels/leverPulled' });
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, THROTTLE_MS);
    }
  }

  function onHoverStart() {
    hoverRotationAngle.set(4);
  }

  function onHoverEnd() {
    hoverRotationAngle.set(0);
  }

  function onDragStart() {
    dispatch({ type: 'cursor/dragging' });
  }

  function onDragEnd() {
    dispatch({ type: 'cursor/stopDragging' });
  }

  return (
    <>
      <motion.div
        animate={highlightedForHelp ? 'onHover' : 'offHover'}
        variants={filterVariants}
        className="lever-base"
      />
      <motion.div
        style={{ y: leverYPos, rotate: rotationAngle }}
        className="lever-handle"
        animate={highlightedForHelp ? 'onHover' : 'offHover'}
        variants={filterVariants}
      />
      <motion.div
        className="lever-drag-handle"
        drag="y"
        onDrag={onDrag}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        whileTap={{ cursor: 'grabbing' }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        style={{
          y: dragYPos,
          x: dragXPos,
        }}
        dragConstraints={{ top: 0, bottom: 140 }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
      />
    </>
  );
};

export default Lever;
