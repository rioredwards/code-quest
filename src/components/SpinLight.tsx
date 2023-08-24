import { SpinState } from "../types";
import "./SpinLight.css";

interface SpinLightProps {
  onClickSpinLight: (spinState: SpinState) => void;
  spinState: SpinState;
}

const SpinLight: React.FC<SpinLightProps> = ({
  spinState,
  onClickSpinLight,
}) => {
  const color = calcColorForSpinMode(spinState);

  return (
    <div className="spin-light-container">
      <div className={`spin-light-color ${color}`}>
        <div
          onClick={() => onClickSpinLight(spinState)}
          className="spin-light-glass"
        />
      </div>
    </div>
  );
};

export default SpinLight;

function calcColorForSpinMode(state: SpinState) {
  switch (state) {
    case "PRE":
      return "red";
    case "IDLE_START":
    case "IDLE_LOOP":
    case "STOPPING":
      return "yellow";
    case "POST":
      return "green";
    default:
      return "green";
  }
}
