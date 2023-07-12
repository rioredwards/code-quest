export const lockSwitchSpring = {
  type: "spring",
  bounce: 0.2,
  duration: 0.3,
};

export const lockSwitchAnimation = (locked: boolean) => ({
  x: locked ? "2vh" : "0vh",
});
