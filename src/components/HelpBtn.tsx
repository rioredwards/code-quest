import { useAppDispatch } from "../store/hooks";
import "./HelpBtn.css";

interface Props {}

const HelpBtn: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  function onClickHelpBtn() {
    dispatch({ type: "help/helpBtnClicked" });
  }

  return (
    <button onClick={onClickHelpBtn} className="help-btn">
      ?
    </button>
  );
};

export default HelpBtn;
