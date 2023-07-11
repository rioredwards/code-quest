import { useEffect, useState } from "react";
import "./LockSwitch.css";
import { motion } from "framer-motion";
import {
  lockSwitchAnimation,
  lockSwitchSpring,
} from "../motionConfigs/lockSwitchMotion";

interface LockSwitchProps {
  locked: boolean;
  setLocked: (isLocked: boolean) => void;
}

const LockSwitch: React.FC<LockSwitchProps> = ({ locked, setLocked }) => {
  return (
    <motion.div
      onClick={() => setLocked(!locked)}
      className="lock-switch-container">
      <motion.div
        animate={lockSwitchAnimation(locked)}
        transition={lockSwitchSpring}
        className="knob"
      />
      <div className="lock-switch-housing" />
      <div className="lock-icons" />
      <motion.div
        animate={lockSwitchAnimation(locked)}
        transition={lockSwitchSpring}
        className="under-panel"
      />
    </motion.div>
  );
};

export default LockSwitch;
