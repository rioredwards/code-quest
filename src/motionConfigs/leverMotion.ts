import { Variant, Variants } from "framer-motion";

export const PULL_THRESHOLD = 100;
export const THROTTLE_MS = 1000;

const hoverAnimation: Variant = {
  filter: [
    "brightness(1.3) saturate(120%) hue-rotate(180deg)",
    "brightness(1.5) saturate(120%) hue-rotate(180deg)",
  ],
  transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" },
};

export const filterVariants: Variants = {
  onHover: hoverAnimation,
  offHover: { filter: "brightness(1)" },
};
