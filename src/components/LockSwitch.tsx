import { useEffect, useState } from "react";
import "./LockSwitch.css";
import { motion } from "framer-motion";

interface LockSwitchProps {
  locked: boolean;
  setLocked: (isLocked: boolean) => void;
}

const LockSwitch: React.FC<LockSwitchProps> = ({ locked, setLocked }) => {
  const spring = {
    type: "spring",
    bounce: 0.2,
    duration: 0.3,
  };

  useEffect(() => {
    if (locked) {
      console.log("locked");
    } else {
      console.log("unlocked");
    }
  }, [locked]);

  return (
    <motion.div
      onClick={() => setLocked(!locked)}
      className="lock-switch-container">
      <motion.div
        animate={{ x: locked ? "2vh" : "0vh" }}
        transition={spring}
        className="knob"
      />
      <div className="lock-switch-housing" />
      <div className="lock-icons" />
      <motion.div
        animate={{ x: locked ? "2vh" : "0vh" }}
        transition={spring}
        className="under-panel"
      />
    </motion.div>
  );
};

export default LockSwitch;
