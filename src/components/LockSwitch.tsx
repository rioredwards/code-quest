import "./LockSwitch.css";
import { motion } from "framer-motion";
import {
  lockSwitchAnimation,
  lockSwitchSpring,
} from "../motionConfigs/lockSwitchMotion";
import { useDispatch } from "react-redux";

interface LockSwitchProps {
  isLocked: boolean;
  toggleLock: () => void;
}

const LockSwitch: React.FC<LockSwitchProps> = ({ isLocked, toggleLock }) => {
  const dispatch = useDispatch();

  function onHoverStart(): void {
    dispatch({
      type: "help/startHoveringOverHelpTarget",
      payload: "LOCK_SWITCH",
    });
  }

  function onHoverEnd(): void {
    dispatch({ type: "help/stopHoveringOverHelpTarget" });
  }

  return (
    <motion.div
      onClick={toggleLock}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
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
