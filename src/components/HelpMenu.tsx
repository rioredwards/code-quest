import "./HelpMenu.css";
import HelpMenuItem from "./HelpMenuItem";

interface Props {}

const HelpMenu: React.FC<Props> = () => {
  return (
    <div className="help-menu-container">
      <h2>How To: | About: </h2>
      <ul className="help-menu-list">
        <HelpMenuItem itemName="LEVER" />
        <HelpMenuItem itemName="SPIN_BTN" />
        <HelpMenuItem itemName="LOCK_SWITCH" />
        <HelpMenuItem itemName="REEL" />
        <HelpMenuItem itemName="DISPLAY" />
      </ul>
    </div>
  );
};

export default HelpMenu;
