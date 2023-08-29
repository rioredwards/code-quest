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
  const CSSclass = spinState === "IDLE_LOOP" ? "active" : "inactive";

  return (
    <div className="spin-light-container">
      <div className={`spin-light-color ${CSSclass}`}>
        <div
          onClick={() => onClickSpinLight(spinState)}
          className="spin-light-glass"
        />
      </div>
    </div>
  );
};

export default SpinLight;
