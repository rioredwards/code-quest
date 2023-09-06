import { SpinState } from "../types";
import "./StopButton.css";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/hooks";
import { selectHelpTargetEl } from "../store/help/helpSlice";

interface StopButtonProps {
  onClickStopButton: (spinState: SpinState) => void;
  spinState: SpinState;
}

const StopButton: React.FC<StopButtonProps> = ({
  spinState,
  onClickStopButton,
}) => {
  const highlightedForHelp =
    useAppSelector(selectHelpTargetEl) === "STOP_BUTTON";

  const additionalCSSClasses = getAdditionalCSSClasses(
    spinState,
    highlightedForHelp
  );

  return (
    <motion.div className="stop-button-container">
      <div className={`stop-button-color ${additionalCSSClasses}`}>
        <div
          onClick={() => onClickStopButton(spinState)}
          className="stop-button-glass"
        />
      </div>
    </motion.div>
  );
};

function getAdditionalCSSClasses(
  spinState: SpinState,
  highlightedForHelp: boolean
): string {
  if (highlightedForHelp) {
    return "help-hover";
  } else if (spinState === "IDLE_START" || spinState === "IDLE_LOOP") {
    return "active";
  } else {
    return "inactive";
  }
}

export default StopButton;
