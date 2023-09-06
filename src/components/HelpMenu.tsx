import { selectHelpState } from "../store/help/helpSlice";
import { useAppSelector } from "../store/hooks";
import "./HelpMenu.css";
import HelpMenuItem from "./HelpMenuItem";
import HelpMenuTitleSwitch from "./HelpMenuTitleSwitch";

interface Props {}

const HelpMenu: React.FC<Props> = () => {
  const activeMenu = useAppSelector(selectHelpState).activeMenu;

  return (
    <div className="help-menu-container">
      <HelpMenuTitleSwitch />
      {activeMenu === "HOW_TO" && (
        <ul className="help-menu-list">
          <HelpMenuItem itemName="LEVER" />
          <HelpMenuItem itemName="STOP_BUTTON" />
          <HelpMenuItem itemName="REEL" />
          <HelpMenuItem itemName="LOCK_SWITCH" />
          <HelpMenuItem itemName="DISPLAY" />
        </ul>
      )}
    </div>
  );
};

export default HelpMenu;
