import "./Choice.css";

interface ChoiceProps {
  displayName: string;
  classes: string;
}

const Choice: React.FC<ChoiceProps> = ({ classes, displayName }) => {
  return <li className={classes}>{displayName}</li>;
};

export default Choice;
