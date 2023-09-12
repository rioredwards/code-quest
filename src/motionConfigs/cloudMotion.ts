import { TargetAndTransition } from 'framer-motion';

export const cloudAnimation: TargetAndTransition = {
  x: [`-80vh`, `200vh`],
  transition: { duration: 50, ease: 'linear', repeat: Infinity },
};
