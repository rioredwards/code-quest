import { SpinState } from "../App";
import "./SpinLight.css";

interface SpinLightProps {
  mode: SpinState;
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

function calcColorForSpinMode(state: SpinState) {
  switch (state) {
    case SpinState.PRE:
      return "red";
    case SpinState.IDLE:
    case SpinState.STOPPING:
      return "yellow";
    case SpinState.POST:
      return "green";
    default:
      return "green";
  }
}
