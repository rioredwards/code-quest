import "./HelpTarget.css";
import { useAppSelector } from "../store/hooks";
import { HelpItemName, selectHelpTargetEl } from "../store/help/helpSlice";

interface Props {
  childName: HelpItemName;
  children: React.ReactNode;
}

const HelpTarget: React.FC<Props> = ({ children, childName }) => {
  const currentTarget = useAppSelector(selectHelpTargetEl);
  const isCurrentTarget = childName === currentTarget;

  return <div className={isCurrentTarget ? "help-target" : ""}>{children}</div>;
};

export default HelpTarget;
