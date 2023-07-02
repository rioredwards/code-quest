import "./Choice.css";

interface ChoiceProps {
  displayName: string;
  classes: string;
}

const Choice: React.FC<ChoiceProps> = ({ displayName, classes }) => {
  return <div className={classes}>{displayName}</div>;
};

export default Choice;
