import { Variants } from "framer-motion";
import { CHOICE_HEIGHT_VH, NUM_CHOICES_VISIBLE } from "./reelMotion";

export const WINDOW_HEIGHT = CHOICE_HEIGHT_VH * NUM_CHOICES_VISIBLE; // vh

export const windowAnimationVariants: Variants = {
  initial: {
    y: `-${WINDOW_HEIGHT}vh`,
    backdropFilter: "blur(5px) brightness(0.3);",
    rotateX: 45,
    transition: {
      duration: 0,
    },
  },
  animate: {
    y: [null, `0vh`],
    backdropFilter: [null, "blur(0px) brightness(1)"],
    rotateX: [null, 0],
    transition: {
      type: "spring",
      damping: 20,
    },
  },
  exit: {
    y: [null, `-${WINDOW_HEIGHT}vh`],
    backdropFilter: [null, "blur(5px) brightness(0.3);"],
    rotateX: [null, 45],
    transition: {
      type: "spring",
      damping: 20,
    },
  },
};
