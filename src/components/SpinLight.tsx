import { useDispatch } from "react-redux";
import { SpinState } from "../types";
import "./SpinLight.css";
import { motion } from "framer-motion";

interface SpinLightProps {
  onClickSpinLight: (spinState: SpinState) => void;
  spinState: SpinState;
}

const SpinLight: React.FC<SpinLightProps> = ({
  spinState,
  onClickSpinLight,
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
      className="spin-light-container">
      <div className={`spin-light-color ${CSSclass}`}>
        <div
          onClick={() => onClickSpinLight(spinState)}
          className="spin-light-glass"
        />
      </div>
    </motion.div>
  );
};

export default SpinLight;
