import { SpinState } from "../types";
import "./SpinLight.css";

interface SpinLightProps {
  setSpinState: (spinState: SpinState) => void;
  spinState: SpinState;
  getRandChoices: () => void;
}

const SpinLight: React.FC<SpinLightProps> = ({
  spinState,
  setSpinState,
  getRandChoices,
}) => {
  const color = calcColorForSpinMode(spinState);
  const offset = calcOffsetPercentForColor(color);

  function onClick() {
    if (spinState === SpinState.IDLE_LOOP) {
      getRandChoices();
      setSpinState(SpinState.STOPPING);
    }
  }

  return (
    <div className="spin-light-container">
      <div
        onClick={onClick}
        className="spin-light"
        style={{ backgroundPositionX: offset }}
      />
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
    case SpinState.IDLE_START:
    case SpinState.IDLE_LOOP:
    case SpinState.STOPPING:
      return "yellow";
    case SpinState.POST:
      return "green";
    default:
      return "green";
  }
}
