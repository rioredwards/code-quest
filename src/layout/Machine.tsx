import "./Machine.css";

interface MachineProps {
  children: React.ReactNode;
}

const Machine: React.FC<MachineProps> = ({ children }) => {
  return <div className="machine">{children}</div>;
};

export default Machine;

// Solution: Have two different reel components, one for the draggable reel and one for the spinning reel.
