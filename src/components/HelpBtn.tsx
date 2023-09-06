import { selectHelpState } from "../store/help/helpSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import "./HelpBtn.css";

interface Props {}

const HelpBtn: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const menuIsOpen = useAppSelector(selectHelpState).helpMenuIsOpen;

  function onClickHelpBtn() {
    dispatch({ type: "help/helpBtnClicked" });
  }

  return (
    <button
      onClick={onClickHelpBtn}
      className={`help-btn ${menuIsOpen ? "menu-open" : ""}`}>
      {menuIsOpen ? "X" : "?"}
    </button>
  );
};

export default HelpBtn;
