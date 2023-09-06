import "./LockSwitch.css";
import { motion } from "framer-motion";
import {
  lockSwitchAnimation,
  lockSwitchSpring,
} from "../motionConfigs/lockSwitchMotion";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";
import { selectHelpTargetEl } from "../store/help/helpSlice";

interface LockSwitchProps {
  isLocked: boolean;
  toggleLock: () => void;
}

const LockSwitch: React.FC<LockSwitchProps> = ({ isLocked, toggleLock }) => {
  const dispatch = useDispatch();
  const highlightedForHelp =
    useAppSelector(selectHelpTargetEl) === "LOCK_SWITCH";

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
        className={`knob ${highlightedForHelp ? "help-hover" : ""}`}
      />
      <div
        className={`lock-switch-housing ${
          highlightedForHelp ? "help-hover" : ""
        }`}
      />
      <div className="lock-icons" />
      {highlightedForHelp && <div className="under-icon-panel" />}
      <motion.div
        animate={lockSwitchAnimation(isLocked)}
        transition={lockSwitchSpring}
        className={`under-knob-panel ${highlightedForHelp ? "help-hover" : ""}`}
      />
    </motion.div>
  );
};

export default LockSwitch;
