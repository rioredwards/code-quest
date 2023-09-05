import { useDispatch } from "react-redux";
import { SpinState } from "../types";
import "./StopButton.css";
import { motion } from "framer-motion";

interface StopButtonProps {
  onClickStopButton: (spinState: SpinState) => void;
  spinState: SpinState;
}

const StopButton: React.FC<StopButtonProps> = ({
  spinState,
  onClickStopButton,
}) => {
  const dispatch = useDispatch();

  const CSSclass =
    spinState === "IDLE_START" || spinState === "IDLE_LOOP"
      ? "active"
      : "inactive";

  function onHoverStart(): void {
    dispatch({ type: "cursor/onHoverTarget", payload: "SPIN_BTN" });
  }

  function onHoverEnd(): void {
    dispatch({ type: "cursor/offHoverTarget" });
  }

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="stop-button-container">
      <div className={`stop-button-color ${CSSclass}`}>
        <div
          onClick={() => onClickStopButton(spinState)}
          className="stop-button-glass"
        />
      </div>
    </motion.div>
  );
};

export default StopButton;
