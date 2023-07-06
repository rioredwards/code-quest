import { SpinMode } from "../App";
import "./SpinLight.css";

interface SpinLightProps {
  mode: SpinMode;
}

const SpinLight: React.FC<SpinLightProps> = ({ mode }) => {
  const color = calcColorForSpinMode(mode);
  const offset = calcOffsetPercentForColor(color);

  return (
    <div className="spin-light-container">
      <div className="spin-light" style={{ backgroundPositionX: offset }} />
    </div>
  );
};

export default SpinLight;

function calcOffsetPercentForColor(color: string): string {
  switch (color) {
    case "green":
      return "0%";
    case "yellow":
      return "50%";
    case "red":
      return "100%";
    default:
      return "0%";
  }
}

function calcColorForSpinMode(mode: SpinMode) {
  switch (mode) {
    case SpinMode.preSpin:
      return "red";
    case SpinMode.midSpin:
      return "yellow";
    case SpinMode.postSpin:
      return "green";
    default:
      return "green";
  }
}
