export const containerVariants = {
  visible: { opacity: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0, transition: { duration: 0.4 } },
};

export const tickVariants = {
  visible: { opacity: 1, scale: 1, pathLength: 1 },
  hidden: { opacity: 0, scale: 0.1, pathLength: 0 },
};

export const boxVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.1 },
};
