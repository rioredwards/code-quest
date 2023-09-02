import { numToVh } from "../utils/genUtils";

const CONTAINER_HEIGHT = 6.3;

export const linesAnimation = {
  y: [`0vh`, `${numToVh(CONTAINER_HEIGHT)}`],
  transition: { duration: 3, ease: "linear", repeat: Infinity },
};

export const displayVariants = {
  off: {
    filter: "brightness(80%)",
  },
  onNotHovering: {
    filter: "brightness(110%)",
  },
  onHovering: {
    filter: "brightness(120%)",
  },
};
