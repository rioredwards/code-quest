import { selectHelpState } from "../store/help/helpSlice";
import { useAppSelector } from "../store/hooks";
import "./HelpMenu.css";
import HowToMenuItem from "./HowToMenuItem";
import HelpMenuTitleSwitch from "./HelpMenuTitleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

interface Props {}

const HelpMenu: React.FC<Props> = () => {
  const activeMenu = useAppSelector(selectHelpState).activeMenu;

  return (
    <div className="help-menu-container">
      <HelpMenuTitleSwitch />
      {activeMenu === "HOW_TO" && (
        <ul className="how-to-list">
          <HowToMenuItem itemName="LEVER" />
          <HowToMenuItem itemName="STOP_BUTTON" />
          <HowToMenuItem itemName="REEL" />
          <HowToMenuItem itemName="LOCK_SWITCH" />
          <HowToMenuItem itemName="DISPLAY" />
        </ul>
      )}
      {activeMenu === "ABOUT" && (
        <p className="about-summary left-aligned">
          <span>Hello 👋</span>
          <div className="custom-line-break" />
          <span>
            My name is <strong>Rio Edwards</strong>, the creator of this app. My
            goal here was to create a fun and interactive way to generate
            pseudo-random coding challenges. I hope you enjoy it and find it
            useful! 😊
            <div className="custom-line-break" />
            <div className="custom-line-break" />
            p.s. I'm currently
            <strong> looking for a full-time job</strong> as a software
            developer! If you are interested in hiring me, or just want to say
            hi, please reach out using the links below. 👇
            <div className="custom-line-break" />
          </span>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/rio-edwards/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                size="2x"
                icon={icon({ name: "linkedin", style: "brands" })}
              />
            </a>
          </div>
        </p>
      )}
    </div>
  );
};

export default HelpMenu;
