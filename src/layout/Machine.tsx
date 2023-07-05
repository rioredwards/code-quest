import "./Machine.css";

interface MachineProps {
  children: React.ReactNode;
}

const Machine: React.FC<MachineProps> = ({ children }) => {
  return (
    <div className="machine">
      <div className="signs-container">{children}</div>
      <div className="reels-container">{children}</div>
      <div className="switches-container">{children}</div>
      <div className="lights-container">{children}</div>
      <div className="results-container">{children}</div>
    </div>
  );
};

export default Machine;

// Solution: Have two different reel components, one for the draggable reel and one for the spinning reel.
