export const lockSwitchSpring = {
  type: "spring",
  bounce: 0.35,
  duration: 0.5,
};

export const lockSwitchAnimation = (locked: boolean) => ({
  x: locked ? "2vh" : "0vh",
});
