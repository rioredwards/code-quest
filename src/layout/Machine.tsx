import "./Machine.css";

interface MachineProps {
  signs: React.ReactNode[];
  lockSwitches: React.ReactNode[];
  lights: React.ReactNode[];
  lever: React.ReactNode;
  display: React.ReactNode;
}

const Machine: React.FC<MachineProps> = ({
  signs,
  lockSwitches,
  lever,
  lights,
  display,
}) => {
  return (
    <div className="machine">
      <div className="signs-area">{signs}</div>
      <div className="lock-switches-area">{lockSwitches}</div>
      <div className="reels-area">{}</div>
      <div className="lever-area">{lever}</div>
      <div className="lights-area">{lights}</div>
      <div className="display-area">{display}</div>
    </div>
  );
};

export default Machine;

// Solution: Have two different reel components, one for the draggable reel and one for the spinning reel.
