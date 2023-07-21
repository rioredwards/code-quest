import "./Choice.css";

interface ChoiceProps {
  displayName: string;
  CSSclasses: string;
}

const Choice: React.FC<ChoiceProps> = ({ CSSclasses, displayName }) => {
  return <div className={CSSclasses}>{displayName}</div>;
};

export default Choice;
