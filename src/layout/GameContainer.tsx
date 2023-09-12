import './GameContainer.css';

interface GameContainerProps {
  children: React.ReactNode;
}

const GameContainer: React.FC<GameContainerProps> = ({ children }) => {
  return <div className="game-container">{children}</div>;
};

export default GameContainer;
