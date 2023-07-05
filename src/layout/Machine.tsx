import "./Machine.css";

interface MachineProps {
  signs: React.ReactNode[];
}

const Machine: React.FC<MachineProps> = ({ signs }) => {
  return (
    <div className="machine">
      <div className="signs-container">{signs}</div>
      <div className="switches-container">{}</div>
      <div className="reels-container">{}</div>
      <div className="handle-container">{}</div>
      <div className="lights-container">{}</div>
      <div className="results-container">{}</div>
    </div>
  );
};

export default Machine;

// Solution: Have two different reel components, one for the draggable reel and one for the spinning reel.
