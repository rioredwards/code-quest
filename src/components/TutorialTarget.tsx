import "./TutorialTarget.css";
import { useAppSelector } from "../store/hooks";
import {
  TutorialTargetEl,
  selectTutorialTargetEl,
} from "../store/tutorial/tutorialSlice";

interface Props {
  childName: TutorialTargetEl;
  children: React.ReactNode;
}

const TutorialTarget: React.FC<Props> = ({ children, childName }) => {
  const currentTarget = useAppSelector(selectTutorialTargetEl);
  const isCurrentTarget = childName === currentTarget;

  return (
    <div className={isCurrentTarget ? "tutorial-target" : ""}>{children}</div>
  );
};

export default TutorialTarget;
