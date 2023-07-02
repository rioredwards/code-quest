import "./ReelContainer.css";

interface ReelContainerProps {
  children: React.ReactNode;
}

const ReelContainer: React.FC<ReelContainerProps> = ({ children }) => {
  return (
    <div className="reel-container">
      <div className="reel-window">{children}</div>
    </div>
  );
};

export default ReelContainer;
