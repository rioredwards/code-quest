import { TargetAndTransition } from 'framer-motion';

export const innerSunAnimation: TargetAndTransition = {
  scale: [1, 1.1],
  transition: {
    duration: 1.5,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'reverse',
  },
};

export const outerSunAnimation: TargetAndTransition = {
  scale: [1.15, 1.25],
  transition: {
    delay: 0.3,
    duration: 1.5,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'reverse',
  },
};
