import "./Sign.css";

interface SignProps {
  name: string;
}

const Sign: React.FC<SignProps> = ({ name }) => {
  return <span className="sign">{name}</span>;
};

export default Sign;
