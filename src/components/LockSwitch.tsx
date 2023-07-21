import "./LockSwitch.css";
import { motion } from "framer-motion";
import {
  lockSwitchAnimation,
  lockSwitchSpring,
} from "../motionConfigs/lockSwitchMotion";

interface LockSwitchProps {
  isLocked: boolean;
  setIsLocked: (isLocked: boolean) => void;
}

const LockSwitch: React.FC<LockSwitchProps> = ({ isLocked, setIsLocked }) => {
  return (
    <motion.div
      onClick={() => setIsLocked(!isLocked)}
      className="lock-switch-container">
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
