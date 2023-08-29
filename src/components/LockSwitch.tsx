import "./LockSwitch.css";
import { motion } from "framer-motion";
import {
  lockSwitchAnimation,
  lockSwitchSpring,
} from "../motionConfigs/lockSwitchMotion";

interface LockSwitchProps {
  isLocked: boolean;
  toggleLock: () => void;
}

const LockSwitch: React.FC<LockSwitchProps> = ({ isLocked, toggleLock }) => {
  return (
    <motion.div onClick={toggleLock} className="lock-switch-container">
      <motion.div
        animate={lockSwitchAnimation(isLocked)}
        transition={lockSwitchSpring}
        className="knob"
      />
      <div className="lock-switch-housing" />
      <div className="lock-icons" />
      <motion.div
        animate={lockSwitchAnimation(isLocked)}
        transition={lockSwitchSpring}
        className="under-panel"
      />
    </motion.div>
  );
};

export default LockSwitch;
