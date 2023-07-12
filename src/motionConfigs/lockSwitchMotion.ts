export const lockSwitchSpring = {
  type: "spring",
  bounce: 0.2,
  duration: 0.3,
};

export const lockSwitchAnimation = (locked: boolean) => ({
  x: locked ? "0vh" : "2vh",
});
